import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import cartEmpty from "../../assets/cart-empty.jpg";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart page", cartItems);

  const clearAllCart = () => {
    console.log("clear all cart");
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-semibold text-3xl sm:text-2xl">
        Cart Items ({cartItems.length})
      </h1>
      {cartItems.length > 0 ? (
        <div>
          <button
            className="my-6 p-2 border outline-none hover:bg-white
       hover:text-themePurple border-themePurple px-3 py-1 bg-themePurple
        text-white font-bold rounded"
            onClick={clearAllCart}
          >
            Remove All
          </button>
          <div className="sm:w-6/12 m-auto my-8 shadow-lg p-4 bg-themePink">
            <ItemsList items={cartItems} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-semibold text-3xl my-8 text-themePurple">
            Oops... you do not have any items in your cart 😅{" "}
          </h1>
          <img
            className="min-w-[350px] min-h-[350px] max-w-[350px] max-h-[350px] sm:min-w-[700px] sm:max-w-[700px] sm:min-h-[650px] sm:max-h-[650px]"
            loading="lazy"
            src={cartEmpty}
            alt="Empty Cart"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
