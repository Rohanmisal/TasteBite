import { useEffect, useState } from "react";
import { filterData } from "../utils/helper";
import RestaurantCard from "./cards/RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
//import BasicExample from "./cards/cardDemo";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  }
  if(!allRestaurants) return null;
  return (filteredRestaurants.length == 0) ?(<Shimmer/>):(
    <>
      <div className="search-container  bg-pink-50 my-5 mt-0">
        <input
          data-testid="search-input"
          type="text"
          className="focus:bg-green-100 p-2 my-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search"
          className="search-btn p-2 m-2 bg-purple-900 hover:bg-blue-500 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search{" "}
        </button>
      </div>
      <div className="flex flex-wrap " data-testid="reslist">
        {filteredRestaurants.map((restraunt) => {
          return (
            <Link 
            to={"/restaurant/" + restraunt.info.id} key={restraunt.info.id} 
            > <RestaurantCard {...restraunt.info} />
            </Link>
          )
        })}
      </div>
    </>
  );
};

export default Body;
