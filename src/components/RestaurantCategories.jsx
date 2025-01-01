import ItemsList from "./ItemsList";

const RestaurantCategories = ({ showItems, setShowIndex, data }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* {Accordiion Title} */}
      <div className="sm:w-6/12  m-auto my-4 p-4 shadow-lg bg-themePink">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className=" text-xl font-bold sm:text-base">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-lg sm:text-base">⬇</span>
        </div>
        {/* {Accordion body} */}
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
