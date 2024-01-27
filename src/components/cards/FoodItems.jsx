import { IMG_CDN } from "../Config";

const FoodItems = ({
    imageId,
    name,
    price,
    
  }) =>{
    return(
      <div className="w-56 p-2 m-2 shadow-lg ">
        <img src={IMG_CDN + imageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{price}</h3>
      </div>
    )
  };

  export default FoodItems;