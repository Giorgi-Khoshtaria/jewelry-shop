import React from "react";
import { useState } from "react";
import slide1 from "/assets/j1.jpeg";
import slide2 from "/assets/j2.jpg";
import slide3 from "/assets/j3.jpeg";
import slide4 from "/assets/j4.jpg";

function MainHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: slide1, text: "Slide 1 Text", name: "Jewelry 1", price: "$100" },
    { image: slide2, text: "Slide 2 Text", name: "Jewelry 2", price: "$200" },
    { image: slide3, text: "Slide 3 Text", name: "Jewelry 3", price: "$300" },
    { image: slide4, text: "Slide 4 Text", name: "Jewelry 4", price: "$400" },
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full flex flex-col items-center mb-16">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
        <div
          className={`flex rounded-lg transition-transform duration-500 ease-in-out `}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className="w-full h-[640px] bg-gray rounded-lg shadow-md relative">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg absolute"
                />
                <div className="absolute top-4/12 left-12 bg-opacity-50 text-white p-4 rounded-b-lg">
                  <p className="text-3xl font-medium text-white mb-4">
                    {slide.name}
                  </p>
                  <p className="text-2xl leading-9 text-white mb-12">
                    {slide.price}
                  </p>
                  <button className="mt-2 px-8 py-3.5  text-white rounded-lg border border-white">
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" absolute bottom-[200px]  mt-4 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-transparent border border-white rounded-[50%]"
                : "bg-white border border-white rounded-[50%]"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainHero;
