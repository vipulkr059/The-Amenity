import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";
import { getToday } from "../utils/helpers";

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
      { count: "exact" }
    );

  //filter
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  //sort
  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  }

  //pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.log(error);
    throw new Error("Bookings can not be fetched");
  }
  return { data, count };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}

export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

export async function getBookingByCabinId(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("startDate, endDate")
    .eq("cabinId", id);

  if (error) {
    console.error(error);
    throw new Error("Booking not found for this cabin");
  }

  return data;
}

export async function createBooking(booking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([{ ...booking }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("booking could not be created");
  }

  return data;
}

export async function getBookingByGuestId(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("status , numGuests, numNights, totalPrice, id")
    .eq("guestId", id);

  if (error) {
    console.error(error);
    throw new Error("Booking not found for this guest");
  }
  console.log(data);
  return data;
}
