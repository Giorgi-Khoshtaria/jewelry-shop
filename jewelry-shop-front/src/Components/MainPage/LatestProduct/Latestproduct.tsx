import React from "react";
import ShopCard from "../../SemiComponents/SemiShopCardComponent/ShopCard";

function Latestproduct() {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-medium leading-11 text-black ">
          Shop The Latest
        </h1>
        <a
          href="/"
          className="text-xl font-medium lead-[26px] text-Accent capitalize"
        >
          View All
        </a>
      </div>
      <div className=" flex justify-between items-center flex-wrap  mb-20 gap-x-14 gap-y-20">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
}

export default Latestproduct;
