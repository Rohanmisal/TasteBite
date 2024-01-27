import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../Config";
import Shimmer from "../Shimmer";
import  useRestaurant from "../../utils/useRestaurant"
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch()

  const addFoodItem = (restaurant) => {
    dispatch(addItem(restaurant))
  }
  const [menuRestaurant, setMenuRestaurant]= useState([])
    //console.log(menuRestaurant);
    
    useEffect(() => {
        getRestaurantInfo();
    });

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" + resId
        );
        const json = await data.json();
      setMenuRestaurant(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
    }

    return !restaurant ? (<Shimmer/>):(
      <div className="flex">
      <div className="res-menu w-80">
          <h1>ResId:{resId}</h1> 
          <h2>{restaurant.name}</h2>
          <img src={IMG_CDN + restaurant.cloudinaryImageId}/>

      </div>
      {/* <div>
          <button
          className="p-2 m-5 bg-green-200" 
          onClick={() =>{handleAddItem()}}>addItem</button>
          
      </div>
      
       */}
      <div className="p-5">
          <h1>Menu</h1>
          <ul>
              {menuRestaurant.map((restaurant)=>(
                  <li key={restaurant.card.info.id}>
                  {restaurant.card.info.name} -
                  <button className="p-1 bg-green-50" onClick={()=> addFoodItem(restaurant)}
                  >
                  add
                  
                  </button>
                  </li>      
              ))}
          </ul>
      </div>
        
      </div>
      
  )
}

export default RestaurantMenu
