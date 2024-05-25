import React from "react";
import "../Utility.css";
import "./PopularProduct.css";

const PopularProducts2 = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <div className="d-flex">
            <div className="col-md-6">
              <div className="d-flex">
                <div className="col-md-6 p-4">
                  <div className="card p-2 rounded-2">
                    <div className="card-img">
                      <img
                        src="Images/1.jpg"
                        alt=""
                        className="w-100 rounded-2"
                      />
                      <div className="card-hover"></div>
                      <div className="card-cart"></div>
                    </div>
                    <div className="card-content p-3 text-center">
                      <p className="text-secondary-light fs-14">Snacks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProducts2;
