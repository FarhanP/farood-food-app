import { RestaurantCard, withRestaurantPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import topRated from "url:../assets/top-rated.svg";

const Body = () => {
  // Local State Variable - useState()
  const [listofRestaurants, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  // Custom online status check hook
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withRestaurantPromotedLabel(RestaurantCard);

  useEffect(() => {
    console.log("useEffect is called");
    // fetch data from API
    fetchData();
  }, []);

  console.log("Component is rendered!");

  const fetchData = async () => {
    const data = await fetch(
      "https://farood-food-app.vercel.app/api/restaurants/list"
    );
    const response = await data.json();
    const responseCard =
      window.innerWidth <= 768
        ? response?.data?.cards[2]
        : response?.data?.cards[4];
    setResList(
      responseCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredList(
      responseCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>Sorry, you are offline at the moment!</h1>;
  }

  return listofRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-3 p-3 sm:my-5 sm:mx-24 sm:p-5">
      <div className="filter mb-5 pb-5 flex flex-col sm:flex-row gap-2">
        <div className="search flex gap-8 sm:gap-4">
          <input
            type="text"
            className="search-box w-full sm:min-w-[200px] px-3 py-1 outline-none border rounded border-themePurple"
            placeholder="Search for a restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn text-lg sm:text-base border outline-none hover:bg-white hover:text-themePurple border-themePurple px-3 py-1 bg-themePurple text-white font-bold rounded"
            onClick={(e) => {
              const filteredRes = listofRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              // if(e.target.textContent === 'Search') {
              setFilteredList(filteredRes);
              // e.target.textContent = 'Clear';
              // } else {
              // document.querySelector('.search-box').value = '';
              // e.target.textContent = 'Search';
              // setFilteredList(listofRestaurants);
              // }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn mt-5 sm:mt-0 flex justify-center items-center gap-1 align-middle border outline-none bg-white text-themePurple border-themePurple px-3 py-1  hover:bg-themePurple  hover:text-white font-bold rounded"
          onClick={() => {
            console.log("Clicked", listofRestaurants);
            const resFiltered = listofRestaurants.filter((res) => {
              return res.info.avgRating >= 4.5;
            });
            setFilteredList(resFiltered);
          }}
        >
          <img src={topRated} className="w-5 h-5" alt="Top rated icon" />
          Top Rated
        </button>
      </div>
      <div className="restaurant-container flex flex-col sm:flex-row justify-start items-center align-middle sm:flex-wrap gap-6 sm:gap-5">
        {/* Restaurant Cards */}
        {filteredList &&
          filteredList.map((res) => (
            <Link
              className="w-full sm:w-auto"
              key={res.info.id}
              to={`/restaurants/${res.info.id}`}
            >
              {res.info.avgRating >= 4.5 ? (
                <RestaurantCardPromoted resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
