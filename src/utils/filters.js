export function filterAccommodations(accommodations, categoryFilter) {
  let sortedAccommodations = accommodations;

  if (categoryFilter === "all") {
    sortedAccommodations = sortedAccommodations;
  } else {
    sortedAccommodations = sortedAccommodations.filter((accommodation) => {
      return (
        accommodation.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    });
  }

  return sortedAccommodations;
}

export function filterCabins(cabins, filterValue) {
  let filteredCabins;

  if (filterValue === "all") {
    filteredCabins = cabins;
  } else if (filterValue === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  } else if (filterValue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  return filteredCabins;
}

export function sortCabins(filteredCabins, field, direction) {
  const modifier = direction === "asc" ? 1 : -1;
  let sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  return sortedCabins;
}
