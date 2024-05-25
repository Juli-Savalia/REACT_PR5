import React from "react";
import "../Components/Product.css";
import "../Utility.css";
import "../Components/swiper.min.css";
import "../Components/jquery.min.js";
import "../Components/swiper.min.js";
import { products } from "./Record_Dis";

$(document).ready(function () {
  // Swiper: Slider
  new Swiper(".swiper-container", {
    loop: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
});

const Product = () => {
  return (
    <div>
      <div className="container">
        {/* Slider main container */}
        <div className="swiper-container">
          {/* Additional required wrapper */}
          <div className="swiper-wrapper py-5">
            {products.map((product) => {
              return (
                <>
                  <div className="swiper-slide">
                    <div className="image position-relative">
                      <img
                        src={product.img}
                        alt=""
                        className="w-100 rounded-2"
                      />
                    </div>
                    <div className="content position-absolute start-0 text-start px-4">
                      <h3 className="text-dark fw-bold fs-5">
                        {product.name}
                        <br></br>
                        {product.lastname}
                      </h3>
                      <h4>
                        <span className="text-green fw-bold">
                          {product.sale}
                        </span>
                        <span className="text-secondary fw-light fs-14 ps-2">
                          OFF on First Order
                        </span>
                      </h4>
                      <button className="bg-green px-4 py-1 mt-3 border-0 rounded-2">
                        <a href="#" className="text-white fs-14">
                          Shop Now
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* If we need navigation buttons */}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    </div>
  );
};

export default Product;
