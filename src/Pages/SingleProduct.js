import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Message from "../Components/LoadingError/Error";
// import products from "../data/Products";
import Header from "../Components/Header";
import Rating from "../Components/homeComponents/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createReview,
} from "../Redux/Actions/ProductActions";
import { addToCart } from "../Redux/Actions/CartActions";
import Loading from "../Components/LoadingError/Loading";
import Error from "../Components/LoadingError/Error";
import { FaPlus, FaMinus } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);

  const getReview = useSelector((state) => state.getReview);
  const reviews = getReview?.productReview?.reviews;

  console.log(reviews);

  const redirect = location.search
    ? location.search.split("=")[1]
    : `/products/${id}`;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, []);

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

  const [amount, setAmount] = useState(1);
  console.log(amount);

  const [comment, setComment] = useState("");
  console.log(comment);

  const [rating, setRating] = useState("");
  console.log(rating);

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > product.message.countInStock) {
        tempAmount = product.message.countInStock;
      }
      return tempAmount;
    });
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!userInfo) {
      navigate("/cart");
      return;
    }
    dispatch(
      addToCart({
        id: id,
        name: product.message.name,
        price: product.message.price,
        images: product.message.images[0],
        quantity: amount,
      })
    );
    navigate("/cart");
  };

  const postReview = () => {
    dispatch(
      createReview({
        id: id,
        content: comment,
        rating: rating,
      })
    );
    setComment("");
    setRating("");
  };

  return (
    <>
      <Header />
      {product.message && (
        <div className="container single-product">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error variant="alert-danger">{error}</Error>
          ) : (
            <>
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
                    <img
                      src={product.message.images[imageIndex]}
                      alt={product.message.name}
                    />
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
                            <div className="grid-toggle-button">
                              <button
                                type="button"
                                className="amount-btn"
                                onClick={decrease}
                              >
                                <FaMinus />
                              </button>
                              <h2 className="amount">{amount}</h2>
                              <button
                                type="button"
                                className="amount-btn"
                                onClick={increase}
                              >
                                <FaPlus />
                              </button>
                            </div>

                          </div>
                          <button
                              className="round-black-btn"
                              onClick={handleAddToCart}
                            >
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
                  <Message variant={"alert-info mt-3"}>
                    {`${product.message.numReviews} đánh giá`}
                  </Message>
                  <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                    {reviews?.map((review) => (
                      <>
                        <strong>{review.owner.username}</strong>
                        <Rating value={review.rating} />
                        <span>{review.createdAt}</span>
                        <div className="alert alert-info mt-3">
                          {review.content}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <h6>THÊM ĐÁNH GIÁ</h6>
                  <div className="my-4"></div>

                  <form>
                    <div className="my-4">
                      <strong>Xếp hạng</strong>
                      <select
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
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
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="my-3">
                      {userInfo ? (
                        <button
                          className="col-12 bg-black border-0 p-3 rounded text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            postReview();
                          }}
                          disabled={reviews.some(
                            (review) => review.owner.id === userInfo.id
                          )}
                        >
                          {reviews.some(
                            (review) => review.owner.id === userInfo.id
                          )
                            ? "Bạn đã đánh giá sản phẩm này!"
                            : "Gửi"}
                        </button>
                      ) : (
                        <button
                          className="col-12 bg-black border-0 p-3 rounded text-white button-disable"
                          disabled
                        >
                          Gửi
                        </button>
                      )}
                    </div>
                  </form>
                  {!userInfo && (
                    <div className="my-3">
                      <Error variant={"alert-warning"}>
                        Hãy{" "}
                        <Link
                          to={
                            redirect ? `/login?redirect=${redirect}` : "/login"
                          }
                        >
                          " <strong>Đăng nhập</strong> "
                        </Link>{" "}
                        ngay để gửi đánh giá{" "}
                      </Error>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SingleProduct;
