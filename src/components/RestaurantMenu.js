import Shimmer from "./Shimmer";
import Loader from "./Loader";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
const[showIndex,setShowIndex]=useState(null);

  if (resInfo === null) return <Loader />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
  } = resInfo?.cards?.[2]?.card?.card?.info;
  const { slaString } = resInfo?.cards?.[2]?.card?.card?.info.sla;

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(categories);
  

  return (
    <div className="  mx-80 ">
      <div>
        <h1 className="font-bold my-6 text-3xl">{name}</h1>
      </div>
      <div className="  px-5 py-5 border border-gray-300 rounded-xl  shadow-xl">
        <div>
          <div className="mx-0 rounded-xl">
            <h2 className="text-base font-bold my-2">
              🌟 {avgRating} ({totalRatingsString}) • {costForTwoMessage}
            </h2>
          </div>
          <div>
            <h2 className=" underline underline-offset-1 text-sm  font-bold text-orange-500 my-2">
              {cuisines.join(" , ")}
            </h2>
          </div>

          <div>
            <h2 className="my-2 gap-4">
              <span className="font-bold text-sm">Outlet</span>{" "}
              <span className="font-medium text-sm text-gray-500">
                {areaName}
              </span>
            </h2>
            <h2 className="font-bold text-sm">{slaString.toLowerCase()}</h2>
          </div>
        </div>
        <div className="mt-2 flex items-center ">
          <img
            className="w-[50px] h-[30px] object-scale-down"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_86,h_30/Swiggy%20One%20Lite/One_lite_Horizontal.png"
            alt=""
          />{" "}
          <span className="text-sm  font-bold text-orange-500">
            Free delivery on orders above ₹199
          </span>
        </div>
      </div>
      <div>
        {categories.map((category,index) => (
          //controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index===showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
            
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
