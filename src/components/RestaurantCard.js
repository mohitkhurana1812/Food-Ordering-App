import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData;
  return (
    <div  data-testid="resCard"className="m-4 p-4 w-[250] h-[450] bg-orange-50 border border-gray-300 rounded-lg hover:bg-orange-200 cursor-pointer">
      <img
        className="rounded-md h-[200]"
        src={CDN_URL + resData.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white">Promoted</label>
        <RestaurantCard resData={props} />
      </>
    );
  }
};
export default RestaurantCard;
