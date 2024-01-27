import { useState, useEffect } from "react";

const Restaurant = (resId) =>{
    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        getRestaurantInfo();
    });

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" + resId
        );
        const json = await data.json();
    
      setRestaurant(json?.data?.cards[0]?.card?.card?.info);
      //setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    }
    return restaurant;
};

export default Restaurant;