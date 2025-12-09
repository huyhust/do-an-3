import React, { useContext, useEffect, useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { MdOutlineCompareArrows, MdCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { fetchDataFromApi, postData } from "../../utils/api"; // keep if available
import CircularProgress from "@mui/material/CircularProgress";
import { MyContext } from "../../App";

import RelatedProducts from "./RelatedProducts";
const ProductDetails = () => {
  const sizes = ["50g", "100g", "200g", "300g", "500g"];

  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);
  const [productData, setProductData] = useState(null);
  const [relatedProductData, setRelatedProductData] = useState([]);
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
  const [isAddedToMyList, setIsAddedToMyList] = useState(false);

  const [cartFields, setCartFields] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const [tabError, setTabError] = useState(false);

  const { id } = useParams();
  const context = useContext(MyContext);

  const isActive = (index) => setActiveSize(index);

  const demoImages = [
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
  ];

  // Simple local state for the review form (so component is runnable standalone)
  const [reviewFields, setReviewFields] = useState({ userName: "", review: "", rating: 0 });

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    setIsLoading(true);

    // try fetching product data if fetchDataFromApi exists; otherwise use demo
    (async () => {
      try {
        if (typeof fetchDataFromApi === "function") {
          const data = await fetchDataFromApi(`/products/${id}`);
          if (!mounted) return;
          setProductData(data || null);
        } else {
          // fallback demo product
          setProductData({
            id,
            title: "All natural Italian-style chicken meatballs",
            brand: "Welch's",
            description: "Delicious all natural Italian-style chicken meatballs.",
            price: 14.0,
            oldPrice: 20.0,
            inStock: true,
            images: demoImages,
          });
        }

        // fake reviews (could be fetched similarly)
        setReviewsData([
          { userName: "Alice", date: "2025-11-10", rating: 4.5, review: "Very tasty!" },
          { userName: "Bob", date: "2025-10-01", rating: 4.0, review: "Good value." },
        ]);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();

    return () => (mounted = false);
  }, [id]);

  const handleQuantityChange = (qty) => setProductQuantity(qty);

  const handleAddToCart = () => {
    // example: call context or API to add
    if (context && context.addToCart) {
      context.addToCart({ productId: productData?.id || id, quantity: productQuantity, size: sizes[activeSize] });
    }
  };

  const submitReview = async (e) => {
    e.preventDefault();
    const newReview = {
      userName: reviewFields.userName || "Anonymous",
      date: new Date().toISOString().slice(0, 10),
      rating: parseFloat(reviewFields.rating) || 0,
      review: reviewFields.review || "",
    };

    // optimistic UI update
    setReviewsData((prev) => [newReview, ...prev]);

    // try posting to server if postData available
    try {
      if (typeof postData === "function") {
        await postData(`/products/${id}/reviews`, newReview);
      }
      // clear form
      setReviewFields({ userName: "", review: "", rating: 0 });
    } catch (err) {
      console.error("Failed to post review", err);
    }
  };

  const changeInput = (name, value) => setReviewFields((s) => ({ ...s, [name]: value }));

  if (isLoading) return (
    <div className="d-flex justify-content-center p-5">
      <CircularProgress />
    </div>
  );

  return (
    <section className="productDetails section">
      <div className="container">
        <h2 className="hd">{productData?.title || "Product"}</h2>
        <div className="row">
          <div className="col-md-4 pl-5 pr-5">
            <ProductZoom images={productData?.images || demoImages} discount={23} />
          </div>

          <div className="col-md-7 pl-5">
            <h2 className="hd text-capitalize">{productData?.title}</h2>

            <ul className="list-inline">
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <span className="text-light me-2">Brand:</span>
                  <span>{productData?.brand || "—"}</span>
                </div>
              </li>

              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                  <span className="text-light ms-2">{reviewsData.length} Review(s)</span>
                </div>
              </li>
            </ul>

            <div className="d-flex info mb-4">
              <span className="oldPrice">${productData?.oldPrice?.toFixed(2) || "0.00"}</span>
              <span className="netPrice text-danger ms-2">${productData?.price?.toFixed(2) || "0.00"}</span>
            </div>

            <span className="badge bg-success">{productData?.inStock ? "IN STOCK" : "OUT OF STOCK"}</span>
            <p className="mt-3">{productData?.description}</p>

            <div className="productSize d-flex align-items-center">
              <span>Size / weight</span>

              <ul className="list-inline-item mb-0 ps-4">
                {sizes.map((size, index) => (
                  <li className="list-inline-item" key={index}>
                    <button type="button" className={`tag btn btn-sm ${activeSize === index ? "btn-primary" : "btn-outline-secondary"}`} onClick={() => isActive(index)}>
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="d-flex align-items-center mt-3 gap-2">
              <QuantityBox value={productQuantity} onChange={handleQuantityChange} />

              <Button variant="contained" color="primary" onClick={handleAddToCart} startIcon={<IoCart />}>
                Add to cart
              </Button>

              <Tooltip title="Add to wishlist" placement="top">
                <Button variant="outlined" className="ms-2">
                  <FaRegHeart />
                </Button>
              </Tooltip>

              <Tooltip title="Add to compare" placement="top">
                <Button variant="outlined" className="ms-2">
                  <MdCompareArrows />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>

        <br />

        {/* Tabs area (Description / Additional Info / Reviews) */}
        <div className="card mt-5 p-5 detailsPageTabs">
          <div className="customTabs mb-3">
            <ul className="list list-inline">
              <li className="list-inline-item me-2">
                <button className={`btn btn-link ${activeTabs === 0 ? "active" : ""}`} onClick={() => setActiveTabs(0)}>Description</button>
              </li>
              <li className="list-inline-item me-2">
                <button className={`btn btn-link ${activeTabs === 1 ? "active" : ""}`} onClick={() => setActiveTabs(1)}>Additional Info</button>
              </li>
              <li className="list-inline-item">
                <button className={`btn btn-link ${activeTabs === 2 ? "active" : ""}`} onClick={() => setActiveTabs(2)}>Reviews ({reviewsData.length})</button>
              </li>
            </ul>
          </div>

          {activeTabs === 0 && (
            <div className="tabContent">
              <p>{productData?.description}</p>
            </div>
          )}

          {activeTabs === 1 && (
            <div className="tabContent">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Stand Up</th>
                      <td>32''L x 24''W x 37-45''H (front to back wheel)</td>
                    </tr>
                    <tr>
                      <th>Folded (w/o wheels)</th>
                      <td>32.5''L x 18.5''W x 16.5''H</td>
                    </tr>
                    <tr>
                      <th>Frame</th>
                      <td>Aluminum</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTabs === 2 && (
            <div className="tabContent">
              <div className="row">
                <div className="col-md-8">
                  <h3>Customer reviews</h3>

                  {reviewsData.length > 0 ? (
                    reviewsData.map((item, index) => (
                      <div className="card p-4 reviewsCard d-flex flex-row mb-3" key={index}>
                        <div className="image text-center">
                          <div className="rounded-circle overflow-hidden" style={{ width: 70, height: 70 }}>
                            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" alt="avatar" className="w-100" />
                          </div>
                          <span className="text-dark d-block text-center fw-bold mt-2">{item.userName}</span>
                        </div>

                        <div className="info ps-4 w-100">
                          <div className="d-flex align-items-center w-100 mb-2">
                            <h6 className="text-muted m-0">{item.date}</h6>
                            <div className="ms-auto">
                              <Rating name={`rating-${index}`} value={parseFloat(item.rating)} precision={0.5} readOnly />
                            </div>
                          </div>
                          <p>{item.review}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No reviews yet.</p>
                  )}

                  <br className="res-hide" />
                  <br className="res-hide" />

                  <form className="reviewForm" onSubmit={submitReview}>
                    <h4>Add a Review</h4>
                    <br />

                    <div className="form-group mb-3">
                      <textarea className="form-control" placeholder="Write a review" name="review" value={reviewFields.review} onChange={(e) => changeInput("review", e.target.value)} />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <input type="text" value={reviewFields.userName} className="form-control" placeholder="Name" name="userName" onChange={(e) => changeInput("userName", e.target.value)} />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <Rating name="rating" value={reviewFields.rating} precision={0.5} onChange={(e, value) => changeInput("rating", value)} />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-success btn-lg mt-2">Submit Review</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <br/>

          <RelatedProducts/>
      </div>
    </section>
  );
};

export default ProductDetails;
