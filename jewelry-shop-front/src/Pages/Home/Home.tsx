import React from "react";
import MainHero from "../../Components/MainPage/MainHero/MainHero";
import Latestproduct from "../../Components/MainPage/LatestProduct/Latestproduct";

function Home() {
  return (
    <div className=" w-full mt-4">
      {" "}
      <MainHero />
      <Latestproduct />
    </div>
  );
}

export default Home;
