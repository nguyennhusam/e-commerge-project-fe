import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Message from "../Components/LoadingError/Error";
// import products from "../data/Products";
import Header from "../Components/Header";
import Rating from "../Components/homeComponents/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/products/getproductbyid/${id}`
      );
      setProduct(data);
    };
    fetchProducts();
  });

  // const product = products.find((p) => p._id === id);

  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevImage = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (imageIndex < product.message.images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <>
      <Header />
      {product.message && (
        <div className="container single-product">
          <div className="row">
            <div className="col-md-6">
              <div className="single-image">
                <div className="imageControls left">
                  <button
                    className="btn-toggle-image"
                    onClick={handlePrevImage}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                </div>
                <img src={product.message.images[imageIndex]} alt={product.message.name} />
                <div className="imageControls right">
                  <button
                    className="btn-toggle-image"
                    onClick={handleNextImage}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-dtl">
                <div className="product-info">
                  <div className="product-name">{product.message.name}</div>
                </div>
                <p>{product.message.description}</p>

                <div className="product-count col-lg-7 ">
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h6>Giá</h6>
                    <span>{product.message.price}đ</span>
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h6>Tình trạng</h6>
                    {product.message.countInStock > 0 ? (
                      <span>còn hàng</span>
                    ) : (
                      <span>hết hàng</span>
                    )}
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h6>Đánh giá</h6>
                    <Rating
                      value={product.message.rating}
                      text={`${product.message.numReviews} đánh giá`}
                    />
                  </div>
                  {product.message.countInStock > 0 ? (
                    <>
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Số lượng</h6>
                        <select>
                          {[...Array(product.message.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button className="round-black-btn">
                        Thêm vào giỏ hàng
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* RATING */}
          <div className="row my-5">
            <div className="col-md-6">
              <h6 className="mb-3">ĐÁNH GIÁ</h6>
              <Message variant={"alert-info mt-3"}>Không có đánh giá</Message>
              <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                <strong>Sam</strong>
                <Rating />
                <span>27, tháng 10, năm 2023</span>
                <div className="alert alert-info mt-3">
                  Sản phẩm đẹp, vừa vặn, đánh giá 5 sao.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h6>THÊM ĐÁNH GIÁ</h6>
              <div className="my-4"></div>

              <form>
                <div className="my-4">
                  <strong>Xếp hạng</strong>
                  <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                    <option value="">Chọn...</option>
                    <option value="1">1 - Không hài lòng</option>
                    <option value="2">2 - Bình thường</option>
                    <option value="3">3 - Tốt</option>
                    <option value="4">4 - Hài lòng</option>
                    <option value="5">5 - Rất hài lòng</option>
                  </select>
                </div>
                <div className="my-4">
                  <strong>Bình luận</strong>
                  <textarea
                    row="3"
                    className="col-12 bg-light p-3 mt-2 border-0 rounded"
                  ></textarea>
                </div>
                <div className="my-3">
                  <button className="col-12 bg-black border-0 p-3 rounded text-white">
                    Gửi
                  </button>
                </div>
              </form>
              <div className="my-3">
                <Message variant={"alert-warning"}>
                  Hãy{" "}
                  <Link to="/login">
                    " <strong>Đăng nhập</strong> "
                  </Link>{" "}
                  ngay để gửi đánh giá{" "}
                </Message>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
