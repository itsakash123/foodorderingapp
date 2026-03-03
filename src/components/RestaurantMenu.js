import Loader from "./Loader";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { Star, Clock, MapPin } from "lucide-react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

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

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Restaurant Header */}
      <div className="mb-8">
        <h1 className="font-bold text-3xl text-charcoal-900 mb-4 text-balance">
          {name}
        </h1>

        <div className="bg-white border border-charcoal-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
              <Star className="w-3.5 h-3.5 text-green-600 fill-green-600" />
              <span className="text-sm font-bold text-green-700">
                {avgRating}
              </span>
            </div>
            <span className="text-charcoal-500 text-sm">
              ({totalRatingsString})
            </span>
            <span className="text-charcoal-300">|</span>
            <span className="text-charcoal-700 text-sm font-medium">
              {costForTwoMessage}
            </span>
          </div>

          <p className="text-brand-500 font-semibold text-sm underline underline-offset-2 mb-3">
            {cuisines.join(", ")}
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-charcoal-400" />
              <span className="text-sm text-charcoal-600">{areaName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-charcoal-400" />
              <span className="text-sm font-medium text-charcoal-700">
                {slaString.toLowerCase()}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 pt-4 border-t border-charcoal-100">
            <img
              className="w-12 h-6 object-scale-down"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_86,h_30/Swiggy%20One%20Lite/One_lite_Horizontal.png"
              alt="Swiggy One"
            />
            <span className="text-sm font-semibold text-brand-500">
              Free delivery on orders above Rs. 199
            </span>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
