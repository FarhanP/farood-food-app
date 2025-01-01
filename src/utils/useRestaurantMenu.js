import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constansts";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  // fetch Data
  useEffect(() => {
    // const timer = setInterval(()=>{
    //   console.log('SPA cons');
    // },1000)
    // return ()=>{
    //   console.log('component unmounted');
    //   clearInterval(timer)
    // }
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://farood-food-app.vercel.app/api/menu" + resId
    );
    const res = await data.json();
    setResMenu(res.data);
    // console.log(res.data);
  };
  return resMenu;
};

export default useRestaurantMenu;
