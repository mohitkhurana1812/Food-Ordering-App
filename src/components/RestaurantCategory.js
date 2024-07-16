import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowItems } = props;
  return (
    <div>
      <div className="cursor-pointer w-6/12 bg-gray-50 shadow-lg p-4 my-4 mx-auto">
        <div
          className="flex justify-between" onClick={()=>setShowItems()}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="">🔽</span>
        </div>
        { showItems&&<ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
