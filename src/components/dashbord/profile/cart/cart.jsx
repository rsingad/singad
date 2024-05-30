
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function WishlistPage() {
    

      const loginId = localStorage.getItem("loginid"); // लॉग-इन उपयोगकर्ता का ID प्राप्त करना
      const [Productapi, setProductapi] = useState([]); // उत्पाद डेटा स्टेट
      const [Bookingapi, setBookingapi] = useState([]); // बुकिंग डेटा स्टेट
      const [FilteredData, setFilteredData] = useState([]); // फ़िल्टर किया गया डेटा स्टेट
    
      useEffect(() => {
        fetchProductInfo(); // उत्पाद डेटा लाने का फ़ंक्शन
        fetchBookingInfo(); // बुकिंग डेटा लाने का फ़ंक्शन
      }, []);
    
      useEffect(() => {
        if (Productapi.length > 0 && Bookingapi.length > 0) {
          filterData(); // डेटा फ़िल्टर करने का फ़ंक्शन
        }
      }, [Productapi, Bookingapi]);
    
      const fetchProductInfo = () => {
        axios
          .get("https://65a0ef06600f49256fb08ab2.mockapi.io/destinationdata")
          .then((response) => {
            setProductapi(response.data);
          })
          .catch((error) => {
            console.log(error.message);
            alert(error);
          });
      };
    
      const fetchBookingInfo = () => {
        axios
          .get("https://66566a099f970b3b36c54ff7.mockapi.io/booked")
          .then((response) => {
            setBookingapi(response.data);
          })
          .catch((error) => {
            console.log(error.message);
            alert(error);
          });
      };
    
      const filterData = () => {
        // केवल लॉग-इन उपयोगकर्ता की बुकिंग को फ़िल्टर करना
        const userBookings = Bookingapi.filter(
          (booking) => booking.userid === loginId && booking.type == "wish"
        );
    
        // प्रत्येक बुकिंग को संबंधित उत्पाद विवरण के साथ मिलाना
        const filtered = userBookings
          .map((booking) => {
            const product = Productapi.find(
              (product) => product.id === booking.productid
            );
            return {
              ...booking,
              productDetails: product,
            };
          })
          .filter((booking) => booking.productDetails !== undefined);
    
        setFilteredData(filtered);
      };
      return (
        <>
          <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                  wishlist
                </h6>
                <h1 className="mb-5 text-capitalize">your wish list </h1>
              </div>
              <div className="row g-4 justify-content-center">
                {FilteredData.map(
                  (item, index) =>
                    item.productDetails && (
                      <div
                        className="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.1s"
                        key={index}
                      >
                        <div className="package-item">
                          <div
                            className="overflow-hidden"
                            style={{ height: "300px" }}
                          >
                            <img
                              className="img-fluid"
                              src={item.productDetails.imageUrl}
                              alt=""
                              style={{ objectFit: "cover", minHeight: "100%" }}
                            />
                          </div>
                          <div className="d-flex border-bottom">
                            <small className="flex-fill text-center border-end py-2">
                              <i className="fa fa-map-marker-alt text-primary me-2"></i>
                              {item.productDetails.name}
                            </small>
                            <small className="flex-fill text-center border-end py-2">
                              <i className="fa fa-calendar-alt text-primary me-2"></i>
                              {item.productDetails.days} days
                            </small>
                            <small className="flex-fill text-center py-2">
                              <i className="fa fa-user text-primary me-2"></i>
                              {item.productDetails.minimumPeople} Person
                            </small>
                          </div>
                          <div className="text-center p-4">
                            <h3 className="mb-0">${item.productDetails.amount}</h3>
                            <div className="mb-3">
                              <small className="fa fa-star text-primary"></small>
                              <small className="fa fa-star text-primary"></small>
                              <small className="fa fa-star text-primary"></small>
                              <small className="fa fa-star text-primary"></small>
                              <small className="fa fa-star text-primary"></small>
                            </div>
    
                            <p className="elppra">{item.productDetails.description}</p>
                            <div className="d-flex justify-content-center mb-2">
                              <Link
                                to={`/pkgDetail/${item.productDetails.id}`}
                                className="btn btn-sm btn-primary px-3 border-end"
                                style={{ borderRadius: "30px 0 0 30px" }}
                              >
                                Read More
                              </Link>
                              <Link
                                to={`/${item.productDetails.id}/booknow`}
                                className="btn btn-sm btn-primary px-3"
                                style={{ borderRadius: "0 30px 30px 0" }}
                              >
                                book Tour
                              </Link>
                            </div>
                          </div>
                          {/* <div className="">
                            <span className="bg-success px-2 py-1 rounded-pill">{item.tourType}</span>
                          </div> */}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </>
      );
    }
export default WishlistPage;
