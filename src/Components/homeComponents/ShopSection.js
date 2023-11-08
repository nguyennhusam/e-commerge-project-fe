import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import products from "../../data/Products";

const ShopSection = () => {
  const initialImageStates = products.map(() => 0);
  const [imageStates, setImageStates] = useState(initialImageStates);

  const handleMouseEnter = (index) => {
    const updatedStates = [...imageStates];
    updatedStates[index] = 1;
    setImageStates(updatedStates);
  };

  const handleMouseLeave = (index) => {
    const updatedStates = [...imageStates];
    updatedStates[index] = 0;
    setImageStates(updatedStates);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product, index) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product._id}
                  >
                    <div className="border-product">
                      <Link to={`/products/${product._id}`}>
                        <div
                          className="shopBack"
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave(index)}
                        >
                          <img
                            src={product.image[imageStates[index]]}
                            alt={product.name}
                          />
                          <button
                              className="add-to-cart-button"
                              onClick={handleAddToCart}
                            >
                              Thêm vào giỏ hàng
                            </button>
                        
                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`/products/${product._id}`}>
                            {product.name}
                          </Link>
                        </p>

                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} đánh giá`}
                        />
                        <h3>{product.price}đ</h3>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
