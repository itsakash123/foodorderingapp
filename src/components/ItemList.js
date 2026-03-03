import { useDispatch  } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
const dispatch=useDispatch();
const handleAddItem=(item)=>{
  //dispatch an action
  dispatch(addItem(item))
}
  return (
    <div>
      {items.map((item) => (
        <div data-testid="foodItems"
          key={item.card.info.id}
          className="p-4 m-2 border-gray-300 text-left border-b-[1px] flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-gray-700 text-[17px] font-bold ">
                {item.card.info.name}
              </span>
              <br />
              <span className="text-gray-700 text-base font-bold">
                {" "}
                ₹{item.card.info.price / 100}
              </span>
            </div>

            <p className="text-base font-medium text-gray-700">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 p-4 relative">
            {/* Image */}
            <img
              className="w-full h-32 object-cover rounded-md"
              src={CDN_URL + item.card.info.imageId}
              onError={(e) => (e.target.style.display = "none")}
              alt=""
            />

            {/* ADD Button */}
            <button className="absolute left-1/2 bottom-1 transform -translate-x-1/2 bg-white text-green-600 text-[17px] font-bold px-9 py-2 rounded-lg shadow-md" 
            onClick={()=>{
               
                 handleAddItem(item)
               
            }}>ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
