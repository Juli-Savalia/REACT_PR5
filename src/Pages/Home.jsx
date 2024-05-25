import React from "react";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import Discount from "../Components/Discount";
import Product from "../Components/Product";
import Commitments from "../Components/Commitments";
import Deall from "../Components/deaal";
import PopularProducts2 from "../Components/PopularProducts2";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Discount />
      <Product />
      <Commitments />
      <Deall />
      <PopularProducts2 />
    </>
  );
};

export default Home;
