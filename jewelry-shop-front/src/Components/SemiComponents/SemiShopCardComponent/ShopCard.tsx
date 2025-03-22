import React from "react";
import image1 from "/assets/shopImage.png";
function ShopCard() {
  return (
    <div>
      <img src={image1} alt="Shop Image" />
      <h3 className="text-xl leading-[26px] text-black mt-6 mb-4">
        Lira Earrings
      </h3>
      <h4 className="text-xl leading-[26px] font-medium capitalize text-Accent">
        $ 20,00
      </h4>
    </div>
  );
}

export default ShopCard;
