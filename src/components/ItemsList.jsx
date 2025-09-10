import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constansts";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const addCartItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  const cartPage = window.location.pathname.includes("cart");

  return (
    <div className="animate-fadeInUp">
      {items.map((item) => (
        <div
          className="py-3 my-3 border-themePurple border-b-2 flex flex-row gap-1 text-left"
          key={item?.card?.info.id}
        >
          <div
            className="min-w-[150px] max-w-[150px] min-h-[150px] max-h-[150px] sm:max-w-[110px] sm:max-h-[110px]
          sm:min-w-[110px] sm:min-h-[110px]
          relative"
          >
            <img
              src={LOGO_URL + item?.card?.info.imageId}
              alt="Food Menu"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            {!cartPage ? (
              <button
                className="absolute bottom-0 right-0 text-sm px-3 bg-themePurple shadow-lg font-bold text-themePink"
                onClick={() => addCartItem(item)}
              >
                Add +
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="px-3">
            <h4 className="font-bold text-lg sm:text-base">
              {item?.card?.info?.name}
            </h4>
            <p className="font-bold sm:text-base text-xl text-themePurple">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-sm pt-2 sm:pt-3">
              {item?.card?.info?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
