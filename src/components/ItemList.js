import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { Plus } from "lucide-react";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="divide-y divide-charcoal-100">
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="flex items-start justify-between gap-4 py-5"
        >
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-charcoal-900 text-base mb-1">
              {item.card.info.name}
            </h4>
            <span className="text-brand-500 font-bold text-sm">
              Rs {item.card.info.price / 100}
            </span>
            {item.card.info.description && (
              <p className="text-charcoal-400 text-sm mt-2 leading-relaxed line-clamp-2">
                {item.card.info.description}
              </p>
            )}
          </div>

          <div className="relative flex-shrink-0 w-28">
            <img
              className="w-28 h-24 object-cover rounded-xl"
              src={CDN_URL + item.card.info.imageId}
              onError={(e) => (e.target.style.display = "none")}
              alt={item.card.info.name}
            />
            <button
              className="absolute left-1/2 -bottom-3 -translate-x-1/2 bg-white hover:bg-brand-50 text-brand-500 border border-brand-200 text-sm font-bold px-5 py-1.5 rounded-lg shadow-sm transition-colors flex items-center gap-1"
              onClick={() => handleAddItem(item)}
            >
              <Plus className="w-3.5 h-3.5" />
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
