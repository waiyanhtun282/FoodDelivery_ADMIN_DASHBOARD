import React from "react";
import Hero from "./Hero";
import SecondHero from "./SecondHero";
import ThirdHeros from "./ThirdHeros";
import FourthHero from "./FourthHero";
import FifthHeros from "./FifthHeros";
import SixthHeros from "./SixthHeros";
import SevenHeros from "./SevenHeros";
import FifthHalf from "./FifthHalf";

const Home = () => {
  return (
    <>
      {/* First  */}
      <Hero />

      {/* second  */}
      <SecondHero />

      {/* third */}
      <ThirdHeros />

      {/* fourth */}
      <FourthHero />

      {/* Fifth */}
      <FifthHeros />

      {/* Fifth.Half */}
      <FifthHalf />

      {/* Sixth */}
      <SixthHeros />

      {/* Seven  */}
      <SevenHeros />
    </>
  );
};

export default Home;
