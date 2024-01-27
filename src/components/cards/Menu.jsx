import { useState, useEffect } from "react";
//import { FETCH_MENU_URL } from "../config";

const Menu = () =>{
    const [menuRestaurant, setMenuRestaurant]= useState(null)

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" + resId
        );
        const json = await data.json();
    
      setMenuRestaurant(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
      //setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    }
    return  menuRestaurant;
};

export default Menu;