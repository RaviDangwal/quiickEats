import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetchData
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId, {
      headers: {
        "x-cors-api-key": "temp_f64c75fcfee35d9b1b781c94a096d170",
      },
    });
    const json = await data.json();
    setResInfo(json.data);
    // console.log(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
