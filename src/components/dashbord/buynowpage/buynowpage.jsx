import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./bookii.css";

function BuyNow() {
  const loginId = localStorage.getItem("loginid");
  const { ID } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [initialValue, setInitialValue] = useState("");
  const [scanModal, setScanModal] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    fetchPackageData();
  }, []);

  const fetchPackageData = async () => {
    try {
      const response = await axios.get(
        `https://65a0ef06600f49256fb08ab2.mockapi.io/destinationdata`
      );
      const packageItem = response.data.find((item) => item.id == ID);
      setPackageData(packageItem);
      // Set the initial value for the scanner here
      setInitialValue("/image.png"); // Assuming initialValue is a property in your package data
    } catch (error) {
      console.error(error.message);
      alert("Error fetching package data");
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleScanShow = () => setScanModal(true);
  const handleScanClose = () => setScanModal(false);

  const handleImageClick = () => {
    // Redirect to QR code URL
    window.location.href = initialValue; // Redirect to the URL of the QR code
  };

  const handleScan = async () => {
    try {
      const response = await axios.post(
        `https://66566a099f970b3b36c54ff7.mockapi.io/booked`,
        {
          transactionId: transactionId,
          productid: ID,
          userid: loginId,
          type: "booking",
        }
      );
      console.log(response.data);
      alert("Booking confirmed!");
      handleScanClose();
      handleClose();
    } catch (error) {
      console.error(error.message);
      alert("Error confirming booking");
    }
  };

  const handleTransactionChange = (e) => {
    setTransactionId(e.target.value);
  };

  const handleError = (err) => {
    console.error(err);
  };

  if (!packageData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Booking</h2>
          <div className="row text-center">
            <h5 className="col-12 text-center">CHOOSE PAYMENT METHOD</h5>
            <div className="col-12 col-lg-4 py-4">
              <button
                onClick={handleScanShow}
                className="btn btn-primary rounded-pill py-2 px-3"
              >
                <i className="fa-brands fa-paypal"></i>
                <span> Paypal</span>
              </button>
            </div>
            <div className="col-12 col-lg-4 py-4">
              <button
                onClick={handleShow}
                className="btn btn-secondary rounded-pill py-2 px-3"
              >
                <i className="fa-brands fa-money-bill-wave"></i>
                <span> Cash on Delivery</span>
              </button>
            </div>
            {/* Other payment buttons */}
          </div>
        </div>
      </div>
      <div
        className={`modal ${showModal ? "d-block" : ""}`}
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cash on Delivery</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to proceed with Cash on Delivery?</p>
            </div>

            <div className="modal-footer bg-danger">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleScan}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal ${scanModal ? "d-block" : ""}`}
        tabIndex="-1"
        style={{ display: scanModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Scan QR Code</h5>

              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleScanClose}
              ></button>
            </div>
            <div className="modal-body overflow-hidden">
              <img
                src="/image.png"
                alt="scanner"
                style={{ objectFit: "cover", width: "100%" }}
              />
            </div>

            <div className="modal-footer bg-danger">
              <form
                className="col-12 text-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleScan();
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "100%" }}
                  id="transactionId"
                  placeholder="transaction id"
                  value={transactionId}
                  onChange={handleTransactionChange}
                  required
                />
                <button type="submit" className="btn btn-primary col-12 mt-2">
                  Confirm
                </button>
              </form>

              <button
                className="btn btn-secondary col-12"
                onClick={handleScanClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
