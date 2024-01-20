import React from "react";
import PropTypes from "prop-types";
import imageA from "../assets/images/ipad.jpg";
import imageB from "../assets/images/headphone.jpg";
import imageC from "../assets/images/nikon.jpg";
import imageD from "../assets/images/macbook-air.jpg";

const Heading = ({ title, color, children }) => {
  // const (title,children) = props
  // console.log("color: ", color);
  return (
    <>
      <h2>{children}</h2>
      {/* destructuring thì sẽ bỏ props. */}
      <div className="image-container">
        <div className="image-frame">
          <img src={imageA} className="custom-image" />
          <p className="product-info">Apple iPad</p>
          <h3 className="cost">$369.00</h3>
          <button className="cart">ADD TO CART</button>
        </div>
        <div className="image-frame">
          <img src={imageB} className="custom-image" />
          <p className="product-info">Sony Headphone</p>
          <h3 className="cost">$23.99</h3>
          <button className="cart">ADD TO CART</button>
        </div>
        <div className="image-frame">
          <img src={imageC} className="custom-image" />
          <p className="product-info">Nikon DSLR</p>
          <h3 className="cost">$250.00</h3>
          <button className="cart">ADD TO CART</button>
        </div>
        <div className="image-frame">
          <img src={imageD} className="custom-image" />
          <p className="product-info">Macbook AIr</p>
          <h3 className="cost">$649.00</h3>
          <button className="cart">ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  color: PropTypes.string,
  // define as a string
};

export default Heading;
