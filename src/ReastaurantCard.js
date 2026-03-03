import { useContext } from "react";
import { CDN_URL } from "./utils/constants";
import userContext from "./utils/UserContext";
//props is jS object
const ReastaurantCard = (props) => {
  const { resData } = props; //resData is the key
  //console.log(resData);
  const {loggedInUser}=useContext(userContext);

  const { cloudinaryImageId, name, costForTwo, cuisines ,avgRating} = resData ;
  //  const styleCard = {
  //    backgroundColor: "#f0f0f0",
  //  };
  return (
    <div data-testid="resCard" className=" relative m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300 drop-shadow-xl inset-shadow-sm ">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4> Rs {costForTwo / 100}</h4>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} 🌟</h4>
      <h4> User:{loggedInUser}</h4>
    </div>
  );
};
//higher order component
//input-restaurant card->restaurantcardpromoted
 export const withPromotedLabel=(ReastaurantCard)=>{
  return (props)=>{  //here props are resData
    return (
      <div className="relative" >
        <label className="absolute z-10 bg-gray-900 text-white m-2 px-2 py-1 rounded-lg">
           Promoted
           </label>
        <ReastaurantCard {...props} />  
      </div>
    );
    
  }
}
export default ReastaurantCard;
