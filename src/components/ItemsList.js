import React from "react";
import { CDN_URL } from "../../src/utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../src/utils/store/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  //   console.log(items);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
          >
            <div className="w-9/12">
              <div className="py-2 font-bold ">
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className="p-2 shadow-lg mx-auto bg-slate-300 rounded-lg"
                  onClick={() => addItemHandler(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt=""
                className="w-32 p-4"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
