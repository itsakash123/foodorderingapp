import { useContext } from "react";
import { CDN_URL } from "./utils/constants";
import userContext from "./utils/UserContext";
import { Star } from "lucide-react";

const ReastaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(userContext);
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } = resData;

  return (
    <div
      data-testid="resCard"
      className="group bg-white rounded-2xl overflow-hidden border border-charcoal-100 hover:shadow-xl hover:border-brand-200 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        {avgRating && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm flex items-center gap-1 px-2.5 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
            <span className="text-sm font-bold text-charcoal-900">
              {avgRating}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-charcoal-900 text-base mb-1 truncate">
          {name}
        </h3>
        <p className="text-charcoal-500 text-sm mb-2 truncate">
          {cuisines.join(", ")}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-brand-500 font-semibold text-sm">
            Rs {costForTwo / 100}
          </span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (ReastaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute z-10 top-3 left-3 bg-charcoal-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Promoted
        </span>
        <ReastaurantCard {...props} />
      </div>
    );
  };
};

export default ReastaurantCard;
