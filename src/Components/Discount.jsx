import React, { useEffect, useState } from "react";
import "../Utility.css";
import "../Components/Discount.css";
import { category, banner } from "./Record_Dis";

const Discount = () => {
  const [discount, setDiscount] = useState(banner);

  const FilterBanner = (cat) => {
    console.log(cat);
    let data = banner.filter((val) => {
      return val.cat === cat;
    });
    setDiscount(data);
  };

  useEffect(() => {
    let arr = [];
    banner.map((val, index) => {
      if (index <= 1) {
        arr.push(val);
      }
    });
    setDiscount(arr);
  }, []);

  return (
    <div className="py-5">
      <div className="container">
        <div className="d-flex">
          <div className="col-md-4">
            <ul className="cat-ul p-0">
              {category.map((val, i) => {
                return (
                  <li
                    className="bg-secondary-light py-2  text-center rounded-2 my-2"
                    key={i}
                  >
                    <button
                      className="border-0 w-100 bg-transparent"
                      onClick={() => FilterBanner(val.heading)}
                    >
                      <a href="#">{val.heading}</a>
                      <p className="text-secondary fs-14 pt-1 m-0">{val.p}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-8 d-flex flex-wrap px-2">
            {discount.map((item) => {
              return (
                <div className="col-6 p-2">
                  <div className="rounded-4 position-relative discount-box">
                    <div>
                      <img
                        src={item.img}
                        alt=""
                        className="w-100 h-100 rounded-2"
                      />
                    </div>
                    <div className="position-absolute top-0 p-2 z-index-9">
                      <h3 className=" text-white top-0 fs-58 d-flex align-items-center ps-2">
                        {item.sale}
                        <span className="fs-14 ps-2">
                          <small className="d-block fs-17">%</small>
                          <small className="d-block fs-17">OFF</small>
                        </span>
                      </h3>
                    </div>

                    <div className="position-absolute bottom-0 w-100 p-5 text-center z-index-9">
                      <h3 className="text-white">{item.name}</h3>
                      <button className="bg-green px-4 py-2 border-0 rounded-2">
                        <a href="#" className="text-white">
                          Shop Now
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
