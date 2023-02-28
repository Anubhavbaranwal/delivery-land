export const filterData = (SearchText, allrestaurants) => {
  console.log(allrestaurants);
  const filtereddata = allrestaurants
    .map((res) => res)
    .filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(SearchText.toLowerCase())
    );
  console.log(filtereddata);
  return filtereddata;
};
