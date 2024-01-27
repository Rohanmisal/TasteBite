import { IMG_CDN } from "../Config";

const RestaurantCard = (
  {
    cloudinaryImageId,
    name,
    locality,
    cuisines
  }
) => {
  return (
    <div className="  w-56 p-2 m-2 shadow-lg leading-6">
    <img src={IMG_CDN+ cloudinaryImageId} />
    <h2 className="font-bold text-xl">{name}</h2>
    <h3>{locality}</h3>
    <h4>{cuisines.join(", ")}</h4>
  </div>
  )
}

export default RestaurantCard
