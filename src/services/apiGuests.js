import supabase from "./supabase";
export async function createGuest(guest) {
  const { data, error } = await supabase
    .from("guests")
    .insert([{ ...guest }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("guest could not be created");
  }

  return data;
}
