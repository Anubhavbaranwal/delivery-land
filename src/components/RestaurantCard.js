import { img_cdn_link } from "../constants";
import { useContext } from "react";
import UserContext from "./utils/Usercontext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  const buttonStyle = {
    backgroundColor:
      avgRating == "--"
        ? "#fff"
        : parseFloat(avgRating) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(avgRating) ? "#535665" : "#fff",
  };
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2  m-2  hover:shadow-lg">
      <img
        className="border-2 border-yellow-300"
        src={img_cdn_link + cloudinaryImageId}
      />
      <div className="card-body">
        <h6 className="font-bold text-xl">{name}</h6>
        <p className="card-tags">{cuisines.join(", ")}</p>
        <div className="flex text-sm">
          <div className="w-8" style={buttonStyle}>
            {/* <AiFillStar /> */}
            <span>{avgRating}</span>
          </div>
          <div className="px-1">•</div>
          <div>{slaString}</div>
          <div className="px-1">•</div>
          <div>{costForTwoString}</div>
        </div>
        <div>{user.name}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
