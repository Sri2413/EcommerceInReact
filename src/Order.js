import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import { Link } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "./odd.css";

export default function Order() {
  const navigate = useNavigate(); // Use useNavigate hook
  const location = useLocation(); // Use useLocation hook to access location information
  const selectedProduct = location.state?.selectedProduct;
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleProceed = () => {
    setOrderPlaced(true);
    // Navigate to the ThankYou component
    navigate("/thankyou");
  };

  if (!selectedProduct) {
    return null;
  }

  // Rest of your component code remains unchanged
  const subtotal = selectedProduct.Rs;
  const discount = parseFloat(subtotal) * 0.1;
  const shippingCharge = 25;
  const tax = subtotal * 0.02;
  const total = parseFloat(subtotal) + shippingCharge + tax - discount;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <ol className="activity-checkout mb-0 px-4 mt-3">
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="bx bxs-receipt text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Billing Info</h5>
                        <p className="text-muted text-truncate mb-4">
                          fill your details
                        </p>
                        <div className="mb-3">
                          <form>
                            <div>
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="billing-name"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="billing-name"
                                      placeholder="Enter name"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="billing-email-address"
                                    >
                                      Email Address
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="billing-email-address"
                                      placeholder="Enter email"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="billing-phone"
                                    >
                                      Phone
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="billing-phone"
                                      placeholder="Enter Phone no."
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="billing-address"
                                >
                                  Address
                                </label>
                                <textarea
                                  className="form-control"
                                  id="billing-address"
                                  rows="3"
                                  placeholder="Enter full address"
                                ></textarea>
                              </div>

                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="mb-4 mb-lg-0">
                                    <label className="form-label">
                                      Country
                                    </label>
                                    <select
                                      className="form-control form-select"
                                      title="Country"
                                    >
                                      <option value="0">Select Country</option>
                                      <option value="AF">Afghanistan</option>
                                      <option value="AL">Albania</option>
                                      <option value="DZ">Algeria</option>
                                      <option value="AS">American Samoa</option>
                                      <option value="AD">Andorra</option>
                                      <option value="AO">Angola</option>
                                      <option value="AI">Anguilla</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div className="mb-4 mb-lg-0">
                                    <label
                                      className="form-label"
                                      htmlFor="billing-city"
                                    >
                                      City
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="billing-city"
                                      placeholder="Enter City"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div className="mb-0">
                                    <label
                                      className="form-label"
                                      htmlFor="zip-code"
                                    >
                                      Zip / Postal code
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="zip-code"
                                      placeholder="Enter Postal code"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="bx bxs-truck text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Shipping Info</h5>
                        <p className="text-muted text-truncate mb-4">
                          Add your address
                        </p>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-lg-4 col-sm-6">
                              <div data-bs-toggle="collapse">
                                <label className="card-radio-label mb-0">
                                  <input
                                    type="radio"
                                    name="address"
                                    id="info-address1"
                                    className="card-radio-input"
                                    checked=""
                                  />
                                  <div className="card-radio text-truncate p-3">
                                    <span className="fs-14 mb-4 d-block">
                                      Address 1
                                    </span>
                                    <span className="fs-14 mb-2 d-block">
                                      Melur,
                                    </span>
                                    <span className="text-muted fw-normal text-wrap mb-1 d-block">
                                      109 Park Road Show Low, AZ 85901
                                    </span>

                                    <span className="text-muted fw-normal d-block">
                                      Mo. 012-345-6789
                                    </span>
                                  </div>
                                </label>
                                <div className="edit-btn bg-light  rounded">
                                  <a
                                    href="#"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                  >
                                    <i className="bx bx-pencil font-size-16"></i>
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                              <div>
                                <label className="card-radio-label mb-0">
                                  <input
                                    type="radio"
                                    name="address"
                                    id="info-address2"
                                    className="card-radio-input"
                                  />
                                  <div className="card-radio text-truncate p-3">
                                    <span className="fs-14 mb-4 d-block">
                                      Address 2
                                    </span>
                                    <span className="fs-14 mb-2 d-block">
                                      Madurai
                                    </span>
                                    <span className="text-muted fw-normal text-wrap mb-1 d-block">
                                      109 Clarksburg Park Road Show Low, AZ
                                      85901
                                    </span>
                                    <span className="text-muted fw-normal d-block">
                                      Mo. 012-345-6789
                                    </span>
                                  </div>
                                </label>
                                <div className="edit-btn bg-light  rounded">
                                  <a
                                    href="#"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                  >
                                    <i className="bx bx-pencil font-size-16"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="bx bxs-wallet-alt text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Payment Info</h5>
                        <p className="text-muted text-truncate mb-4">
                          Duis arcu tortor, suscipit eget
                        </p>
                      </div>
                      <div>
                        <h5 className="font-size-14 mb-3">Payment method :</h5>
                        <div className="row">
                          <div className="col-lg-3 col-sm-6">
                            <div data-bs-toggle="collapse">
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption1"
                                  className="card-radio-input"
                                />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bx-credit-card d-block h2 mb-3"></i>
                                  Credit / Debit Card
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3 col-sm-6">
                            <div>
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption2"
                                  className="card-radio-input"
                                />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bxl-paypal d-block h2 mb-3"></i>
                                  Paypal
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3 col-sm-6">
                            <div>
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption3"
                                  className="card-radio-input"
                                  checked=""
                                />

                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bx-money d-block h2 mb-3"></i>
                                  <span>Cash on Delivery</span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="row my-4">
              <div className="col">
                <div className="text-end mt-2 mt-sm-0">
                  <button className="btn btn-success" onClick={handleProceed}>
                    <i className="mdi mdi-cart-outline me-1"></i> Proceed{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card checkout-order-summary">
              <div className="card-body">
                <div className="p-3 bg-light mb-3">
                  <h5 className="font-size-16 mb-0">
                    Order Summary{" "}
                    <span className="float-end ms-2">#MN0124</span>
                  </h5>
                </div>
                <div className="table-responsive">
                  <table className="table table-centered mb-0 table-nowrap">
                    <thead>
                      <tr>
                        <th
                          className="border-top-0"
                          style={{ width: "110px;" }}
                          scope="col"
                        >
                          Product
                        </th>
                        <th className="border-top-0" scope="col">
                          Product Desc
                        </th>
                        <th className="border-top-0" scope="col">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          {selectedProduct.img && (
                            <img
                              src={selectedProduct.img}
                              alt="product-img"
                              title="product-img"
                              className="avatar-lg rounded"
                            />
                          )}
                        </th>
                        <td>
                          <h5 className="font-size-16 text-truncate">
                            <a href="#" className="text-dark">
                              Waterproof Mobile Phone
                            </a>
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star-half text-warning"></i>
                          </p>
                          <p className="text-muted mb-0 mt-1">
                            Rs {selectedProduct.Rs} x 1
                          </p>
                        </td>
                        <td>Rs 520</td>
                      </tr>
                      <tr></tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Sub Total :</h5>
                        </td>
                        <td>Rs {subtotal}</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Discount :</h5>
                        </td>
                        <td>- Rs {discount.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">
                            Shipping Charge :
                          </h5>
                        </td>
                        <td>Rs {shippingCharge}</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Estimated Tax :</h5>
                        </td>
                        <td>Rs {tax.toFixed(2)}</td>
                      </tr>
                      <tr className="bg-light">
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Total:</h5>
                        </td>
                        <td>Rs {total.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
