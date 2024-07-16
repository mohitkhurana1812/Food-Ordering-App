import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
      const dispatch = useDispatch();
      const handleAddItem = (item) => {
            dispatch(addItem(item));
      }
  const { items } = props;
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            data-testid = "foodItems"
            key={item.card.info.id}
            className="text-left p-2 m-2 border-b-2 flex justify-between"
          >
            <div>
              <div className="py-2 flex flex-col">
                <span className="font-semibold">{item.card.info.name}</span>
                <span>₹ {item.card.info.price / 100}</span>
              </div>
              <p className="text-xs">{item.card.info.description} </p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  onClick={()=>handleAddItem(item)}
                  className="p-2 mx-12 cursor-pointer round-lg bg-black text-white shadow-lg"
                >
                  Add +
                </button>
              </div>
              <img
                className="mx-2 w-24 h-24 rounded-md"
                src={CDN_URL + item.card.info.imageId}
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
