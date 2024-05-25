import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";

import "./Header.css";
import "../Utility.css";

const Header = () => {
  return (
    // header
    <>
      <header className="py-3">
        <div className="container">
          <div className="d-flex flex-wrap">
            <div className="col-md-2">
              <a className="navbar-brand" href="#">
                <img src="Images/logo.png" alt="" />
              </a>
            </div>
            <div className="col-md-10 d-flex justify-content-around align-items-center">
              <div className="col-md-6 ">
                <form className="border border-2 border-success ps-4 rounded-2 w-100 d-flex">
                  <input
                    type="text"
                    placeholder="Search For Items"
                    className="border-0 w-45 h-100 outline-none border-end border-success"
                  />
                  <select className="border-0 w-50 fs-17">
                    <option className="text-secondary-emphasis">
                      All Categories's
                    </option>
                    <option>Women's</option>
                    <option>Men's</option>
                    <option>Electronic's</option>
                  </select>
                  <div className="w-20 h-100">
                    <a
                      href="#"
                      className="bg-green search-btn text-white justify-self-end px-4 align-items-center d-block h-100 line23"
                    >
                      <FaSearch />
                    </a>
                  </div>
                </form>
              </div>
              <div className="col-md-4  content-end">
                <ul className="p-0 m-0 d-flex">
                  <li className="pe-3">
                    <a href="#" className="fs-17">
                      <span className="fs-17 pe-2">
                        <FaRegUser />
                      </span>
                      Account
                    </a>
                  </li>
                  <li className="pe-3">
                    <a href="#" className="fs-17">
                      <span className="fs-17 pe-2">
                        <FaRegHeart />
                      </span>
                      Wishlist
                    </a>
                  </li>
                  <li className="pe-3">
                    <a href="#" className="fs-17">
                      <span className="fs-17 pe-2">
                        <FaOpencart />
                      </span>
                      Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* // navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
