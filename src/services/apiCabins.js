import supabase from "./supabase";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
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

export async function createCabin(newCabin) {
  //Creating cabin
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imageUrl }])
    .select()
    .single();
  if (error) {
    console.log(error);
    throw new Error("Cabin can not be created");
  }

  //Upload Image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  if (storageError) {
    // Handle error
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}

export async function updateCabin(newCabin, id) {
  console.log(newCabin);
  const hasImagePath = newCabin.image?.startWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imageUrl = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //Updating cabin
  const { data, error } = await supabase
    .from("cabins")
    .update({ ...newCabin, image: imageUrl })
    .eq("id", id)
    .select();
  if (error) {
    console.log(error);
    throw new Error("Cabin can not be created");
  }

  if (hasImagePath) {
    return data;
  }
  //Upload Image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  if (storageError) {
    // Handle error
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}
