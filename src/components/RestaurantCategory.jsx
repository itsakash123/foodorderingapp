import ItemList from "./ItemList";
import { ChevronDown, ChevronUp } from "lucide-react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="mb-4">
      <div className="bg-white border border-charcoal-100 rounded-2xl overflow-hidden shadow-sm">
        <div
          className="flex items-center justify-between p-5 cursor-pointer hover:bg-cream-100 transition-colors"
          onClick={handleClick}
        >
          <span className="font-bold text-charcoal-900">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? (
            <ChevronUp className="w-5 h-5 text-charcoal-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-charcoal-400" />
          )}
        </div>
        {showItems && (
          <div className="px-5 pb-5 border-t border-charcoal-100">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
