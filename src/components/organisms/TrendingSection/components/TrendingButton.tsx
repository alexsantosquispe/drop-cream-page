export const TrendingButton = () => {
  return (
    <button className="flex max-h-[3.375rem] w-fit items-center gap-4 self-end rounded-full bg-white pl-5 text-lg font-medium text-black hover:cursor-pointer hover:bg-gray-200 md:text-[1.75rem]">
      Trending
      <img
        src="/img/fire.webp"
        className="h-10 w-10 pb-3 md:h-[3.625rem] md:w-[3.625rem]"
      />
    </button>
  );
};
