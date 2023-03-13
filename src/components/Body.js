// import RestaurantList from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "./utils/Helper";
import { Link } from "../../node_modules/react-router-dom";
import useOnline from "./utils/useOnline";

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurantlist();
  }, []);
  async function getRestaurantlist() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6150164&lng=77.30300489999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>⛔Please check your internet Connection </h1>;
  }
  const handleSubmit = () => {
    console.log(SearchText);
    const data = filterData(SearchText, allrestaurants);
    setFilteredRestaurants(data);
  };

  if (!allrestaurants) return null;

  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="text-center px-2">
        <input
          type="text "
          placeholder="Search"
          className="w-80 px-2 m-4 rounded-sm border-2"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-yellow-400 rounded w-16"
          onClick={() => handleSubmit()}
          // onClick={handleclick}
        >
          Search
        </button>
      </div>
      {filteredrestaurants?.length === 0 ? (
        <h1>No Restraunt match your Filter!!</h1>
      ) : (
        <div className="flex flex-wrap justify-items-center ml-8">
          {filteredrestaurants.map((restaurants) => {
            return (
              <Link
                to={"/restaurnt/" + restaurants.data.id}
                key={restaurants.data.id}
              >
                <RestaurantCard {...restaurants.data} />
              </Link>
            );
          })}
          ;
        </div>
      )}
    </>
  );
};

export default Body;
