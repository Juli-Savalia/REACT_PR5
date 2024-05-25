import React from "react";
import "../Components/Product.css";
import "../Utility.css";
import "../Components/swiper.min.css";
import "../Components/jquery.min.js";
import "../Components/swiper.min.js";
import { commitments } from "./Record_Dis.jsx";

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

const Commitments = () => {
  return (
    <div className="container pb-5">
      <div className="swiper-container">
        <div className="swiper-wrapper py-5">
          {commitments.map((commit) => {
            return (
              <>
                <div className="swiper-slide">
                  <div className="bg-secondary-light w-100  rounded-2 border">
                    <div className="w-100 p-3">
                      <img
                        src={commit.img}
                        alt=""
                        width={44}
                        height={44}
                        className="text-green"
                      />
                      <h3 className="fs-17 py-2 text-green fw-bold">
                        {commit.name}
                      </h3>
                      <p className="fs-14">{commit.p}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </div>
  );
};

export default Commitments;
