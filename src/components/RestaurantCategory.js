
import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItems,setShowIndex}) => {

  
  const handleClick=()=>{
    
    setShowIndex();
    
  }
  return (
    <div>
      <div className=" mx-15 my-4 bg-gray-50  p-4 shadow-lg ">
        <div className="flex justify-between cursor-pointer " onClick={handleClick}>
          <span className="font-bold text-[18px]">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>{"🔽"}</span>
        </div>
        { showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
