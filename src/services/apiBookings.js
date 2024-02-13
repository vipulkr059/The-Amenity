import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );
  if (error) {
    console.log(error);
    throw new Error("Bookings can not be fetched");
  }
  return data;
}
