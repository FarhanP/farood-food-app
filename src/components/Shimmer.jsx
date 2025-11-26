const Shimmer = () => {
  const shimmerCount = 6;
  return (
    <div className="shimmer-container min-h-svh body sm:max-w-[1320px] sm:flex sm:flex-row sm:items-center sm:mx-auto m-3 p-3 sm:my-10  sm:p-0">
      <div className="restaurant-container flex flex-col sm:flex-row justify-start items-center align-middle sm:flex-wrap gap-6 sm:gap-5">
        {Array.from({ length: shimmerCount }).map((_, index) => {
          return (
            <div
              key={index}
              className="shimmer-cards border rounded shadow-md transition-all duration-400 ease-in-out 
      bg-[#f0f0f0] restaurant-card flex flex-col gap-2 duration-500 min-h-[450px] hover:border-[#e8d7e8] hover:shadow-lg hover:shadow-shadowPink p-4 sm:p-6 min-w-full max-w-full sm:max-w-[315px] sm:min-w-[315px] sm:min-h-[432px] h-auto animate-fadeInUp"
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Shimmer;
