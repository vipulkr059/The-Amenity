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

export async function getGuestByEmail(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  if (error) {
    console.error(error);
    throw new Error("guest could not be found");
  }

  return data;
}
