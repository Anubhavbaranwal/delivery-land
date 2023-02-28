import { img_cdn_link } from "../constants";

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
  return (
    <div className="card">
      <img className="card-img" src={img_cdn_link + cloudinaryImageId} />
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p className="card-tags">{cuisines.join(", ")}</p>
        <div className="card-details">
          <div className="rating" style={buttonStyle}>
            {/* <AiFillStar /> */}
            <span>{avgRating}</span>
          </div>
          <div>•</div>
          <div>{slaString}</div>
          <div>•</div>
          <div>{costForTwoString}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
