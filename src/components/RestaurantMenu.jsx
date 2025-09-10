import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwo, avgRating } =
    resMenu?.cards[2]?.card?.card?.info;

  const responseCard =
    window.innerWidth <= 768 ? resMenu?.cards[5] : resMenu?.cards[4];

  const { itemCards } =
    responseCard?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  const categories =
    responseCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu m-3 p-3 text-center animate-fadeInUp">
      <h1 className="font-bold text-3xl sm:text-2xl my-8 sm:my-6">{name}</h1>
      <p className=" text-xl text-bold sm:text-lg">
        {cuisines.join(", ")} - {costForTwo / 100}
      </p>
      {/* {Categories Accordion} */}
      {categories.map((category, index) => (
        <RestaurantCategories
          showItems={index === showIndex ? true : false}
          setShowIndex={(newIndex) =>
            setShowIndex((prevIndex) =>
              prevIndex === newIndex ? -1 : newIndex
            )
          }
          index={index}
          data={category?.card?.card}
          key={category?.card?.card?.title}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
