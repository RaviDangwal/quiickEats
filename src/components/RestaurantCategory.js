import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ info, showItems, setShowIndex }) => {
  const [showItem, setSHowItem] = useState(false);
  const [arrowShow, setArrowShow] = useState("⬇");
  const arrow = () => {
    arrowShow === "⬇" ? setArrowShow("⬆") : setArrowShow("⬇");
  };
  const handleClick = () => {
    setShowIndex();
  };

  //   console.log(info);
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-xl p-4 mx-auto my-4 cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold">
            {info.title} ({info.itemCards.length})
          </span>
          <span onClick={arrow}>{arrowShow}</span>
        </div>

        {showItems && <ItemsList items={info.itemCards} />}
      </div>
      {/* Accordian body */}
    </div>
  );
};

export default RestaurantCategory;
