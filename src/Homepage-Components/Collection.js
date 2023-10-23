import React from 'react'
import blacktshirt from "../images/black-tshirt.jpg";
import paradiseTshirt from "../images/gooke-tshirt.jpg";
import lightblue from "../images/always-blue.jpg";

export const Collection = ({cart}) => {
  return (
    <div className="container mb-5  ">
      <div className=" descoversec my-5 ">
        <h2> POPPULAR PRODUCTS.</h2>
      </div>
      <div className=" products d-flex flex-row flex-wrap align-items-center  justify-content-around position-relative">
        {/* <div className="product1 ">
          <img src={blacktshirt} alt="" />
          <h5
            style={{
              color: "#090909b5",
              marginTop: "5px",
              fontFamily: "serif",
            }}
          >
            {" "}
            Black Tshirt
          </h5>
          <h5 style={{ color: "#090909b5" }}>&#x20B9; 2500/- </h5>
          <div className="productbtn">
            <ul>
              <li>
                <button style={{ fontSize: "large" }} className="btn">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </li>
              <li>
                {" "}
                <button style={{ fontSize: "large" }} className="btn">
                  {" "}
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </li>
            </ul>
          </div>
        </div> */}

        <div>
          <div className="product position-relative   ">
            <div className=" single-product d-flex flex-column   ">
              <img
                className="rounded"
                style={{ width: "100%", objectFit: "cover", height: "100%" }}
                src={blacktshirt}
                alt=""
              />
            </div>
            <h5
              className="text-center my-2"
              style={{ fontFamily: "monospace" }}
            >
              Black Tshirt
            </h5>
            <div className="price-cart-btn d-flex flex-row flex-wrap justify-content-center align-items-center mt-3">
              <h5 className="" style={{ fontFamily: "monospace" }}>
                {" "}
                &#x20b9;2500/-
              </h5>
            </div>
          </div>
        </div>
        <div>
          <div className="product position-relative   ">
            <div className=" single-product d-flex flex-column   ">
              <img
                className="rounded"
                style={{ width: "100%", objectFit: "cover", height: "100%" }}
                src={paradiseTshirt}
                alt=""
              />
            </div>
            <h5
              className="text-center my-2"
              style={{ fontFamily: "monospace" }}
            >
              Paradise Tshirt
            </h5>
            <div className="price-cart-btn d-flex flex-row flex-wrap justify-content-center align-items-center mt-3">
              <h5 className="" style={{ fontFamily: "monospace" }}>
                {" "}
                &#x20b9;499/-
              </h5>
            </div>
          </div>
        </div>
        <div>
          <div className="product position-relative   ">
            <div className=" single-product d-flex flex-column   ">
              <img
                className="rounded"
                style={{ width: "100%", objectFit: "cover", height: "100%" }}
                src={lightblue}
                alt=""
              />
            </div>
            <h5
              className="text-center my-2"
              style={{ fontFamily: "monospace" }}
            >
             Light Blue Tshirt
            </h5>
            <div className="price-cart-btn d-flex flex-row flex-wrap justify-content-center align-items-center mt-3">
              <h5 className="" style={{ fontFamily: "monospace" }}>
                {" "}
                &#x20b9;1499/-
              </h5>
            </div>
          </div>
        </div>

        {/* 2nd */}


        {/* <div className="product1">
          <img src={paradiseTshirt} alt="" />
          <h5
            style={{
              color: "#090909b5",
              marginTop: "5px",
              fontFamily: "serif",
            }}
          >
            {" "}
            Paradise - Tshirt
          </h5>
          <h5 style={{ color: "#090909b5" }}>&#x20B9; 499/- </h5>
          <div className="productbtn">
            <ul>
              <li>
                <button style={{ fontSize: "large" }} className="btn">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </li>
              <li>
                {" "}
                <button style={{ fontSize: "large" }} className="btn">
                  {" "}
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <div className="product1">
          <img src={lightblue} alt="" />
          <h5
            style={{
              color: "#090909b5",
              marginTop: "5px",
              fontFamily: "serif",
            }}
          >
            {" "}
            Light Blue Tshirt
          </h5>
          <h5 style={{ color: "#090909b5" }}>&#x20B9; 1399/- </h5>
          <div className="productbtn">
            <ul>
              <li>
                <button style={{ fontSize: "large" }} className="btn">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </li>
              <li>
                {" "}
                <button style={{ fontSize: "large" }} className="btn">
                  {" "}
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Collection;
