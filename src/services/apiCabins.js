import supabase from "./supabase";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Something wrong with cabins data");
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin can not be deleted");
  }

  return data;
}

// export async function createCabin(newCabin) {

//   console.log(newCabin);
//   //Creating cabin
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );
//   const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   const { data, error } = await supabase
//     .from("cabins")
//     .insert([{ ...newCabin, image: imageUrl }])
//     .select()
//     .single();
//   if (error) {
//     console.log(error);
//     throw new Error("Cabin can not be created");
//   }

//   //Upload Image
//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabin.image);
//   if (storageError) {
//     // Handle error
//     await supabase.from("cabins").delete().eq("id", data.id);
//     throw new Error("Cabin image could not be uploaded");
//   }

//   return data;
// }

// export async function updateCabin(newCabin, id) {
//   console.log(newCabin);
//   const hasImagePath = newCabin.image?.startWith?.(supabaseUrl);
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );
//   const imageUrl = hasImagePath
//     ? newCabin.image
//     : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   //Updating cabin
//   const { data, error } = await supabase
//     .from("cabins")
//     .update({ ...newCabin, image: imageUrl })
//     .eq("id", id)
//     .select();
//   if (error) {
//     console.log(error);
//     throw new Error("Cabin can not be created");
//   }

//   if (hasImagePath) {
//     return data;
//   }
//   //Upload Image
//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabin.image);
//   if (storageError) {
//     // Handle error
//     await supabase.from("cabins").delete().eq("id", data.id);
//     throw new Error("Cabin image could not be uploaded");
//   }

//   return data;
// }

export async function createCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // if (typeof newCabin.image == "object") {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // }
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function getCabinById(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Something wrong with cabin data");
  }

  return data;
}
