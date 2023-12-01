import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Error from "../LoadingError/Error";

const ShopSection = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // const productDetails = useSelector((state) => state.productDetails);
  // const { product } = productDetails;

  // const cartList = useSelector((state) => state.cartList);
  // const { cartItem } = cartList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);


  return (
    <>
      {products.data && (
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col-lg-12 col-md-12 article">
                <div className="shopcontainer row">
                  {loading ? (
                    <div className="mb-5">
                      <Loading />
                    </div>
                  ) : error ? (
                    <Error variant="alert-danger">{error}</Error>
                  ) : (
                    <>
                      {products.data.map((product) => (
                        <div
                          className="shop col-lg-4 col-md-6 col-sm-6"
                          key={product._id}
                        >
                          <div className="border-product">
                            <div className="shopBack">
                              <Link to={`/products/${product._id}`}>
                                <img
                                  src={product.images[0]}
                                  alt={product.name}
                                />
                              </Link>
                            </div>

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
                    </>
                  )}

                  {/* Pagination */}
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopSection;
