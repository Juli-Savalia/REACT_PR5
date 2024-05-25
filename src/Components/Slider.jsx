import React from "react";
import "./Slider.css";
import "../Utility.css";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="banner1 position-relative">
              <img
                src="Images/vector-1.png"
                alt=""
                height={70}
                className="position-absolute top-0 end-50 opacity-50 pt-3 swing"
              />
              <div className="w-50">
                <h4 className="fw-bold">
                  <span className="text-green fw-bolder py-3 pe-3">
                    <u>100%</u>
                  </span>
                  Organic Vegetables
                </h4>
                <h1 className="fs-58 fw-bolder">
                  The best way to <br></br>stuff your wallet.
                </h1>
                <p className="py-3 text-secondary fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque quod et, iste velit!
                </p>
                <button className="px-3 py-2 bg-green border-0 text-white rounded-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="Images/banner-2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
