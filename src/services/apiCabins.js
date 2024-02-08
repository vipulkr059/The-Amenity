import supabase from "./supabase";

export default async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Something wrong with cabins data");
  }

  return data;
}
