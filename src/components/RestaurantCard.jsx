import { LOGO_URL } from "../utils/constansts";
import {
  faClockFour,
  faStar,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla: { slaString },
  } = props?.resData.info;

  return (
    <div
      className="restaurant-card flex flex-col gap-2 border rounded shadow-md transition-all duration-400 ease-in-out 
      hover:border-[#e8d7e8] hover:shadow-lg hover:shadow-shadowPink
      bg-white p-4 sm:p-6 min-w-full max-w-full sm:max-w-[350px] sm:min-w-[350px] sm:min-h-[432px] h-auto"
    >
      <img
        className="restaurant-logo rounded-lg w-full min-h-[270px] max-h-[270px] h-auto object-cover"
        alt="Briyani Food"
        src={LOGO_URL + cloudinaryImageId}
      />
      <h3 className="pt-4 font-bold text-2xl sm:text-lg line-clamp-1 break-words overflow-hidden">
        {name}
      </h3>
      <h4 className="line-clamp-1 text-lg sm:text-base break-words overflow-hidden">
        {cuisines.join(", ")}
      </h4>
      <h4 className="text-lg sm:text-base">
        <FontAwesomeIcon className="pr-2" color="#800080" icon={faStar} />
        {avgRating}
        Ratings
      </h4>
      <h4 className="font-extrabold text-xl sm:text-base">
        <FontAwesomeIcon className="pr-2" color="#800080" icon={faMoneyBill} />
        {costForTwo}
      </h4>
      <h4>
        <FontAwesomeIcon className="pr-2" color="#800080" icon={faClockFour} />
        {slaString}
      </h4>
      <button className="search-btn mt-2 text-lg sm:text-base border outline-none hover:bg-white hover:text-themePurple border-themePurple px-3 py-1 bg-themePurple text-white font-bold rounded">
        View Details
      </button>
    </div>
  );
};

// Higher order component
export const withRestaurantPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label
          className="absolute bg-themePurple text-white font-bold m-1 py-1 px-2 rounded"
          htmlFor="promotedlabel"
        >
          Sponsored
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
