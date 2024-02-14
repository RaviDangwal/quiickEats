import { useContext } from "react";
import { CDN_URL } from "../../src/utils/constants";
import userContext from "../../src/utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(userContext);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  // console.log(resData);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[260px] bg-green-100 rounded-lg hover:bg-green-300"
    >
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>User : {loggedInUser}</h4> {/*we can use here also from userContext*/}
    </div>
  );
};

//Higher order component

//input - RestaurantCard ==> RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     <div>
//       <label>Promoted</label>
//       <RestaurantCard {...props} />
//       console.log(props);
//     </div>;
//   };
// };

export default RestaurantCard;
