import supabase from "./supabase";

export async function getBookings({ filter, sortBy }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );

  //filter
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  //sort
  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  }

  const { data, error, count } = await query;
  if (error) {
    console.log(error);
    throw new Error("Bookings can not be fetched");
  }
  return data;
}
