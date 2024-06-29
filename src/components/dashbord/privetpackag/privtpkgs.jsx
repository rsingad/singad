import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Privetpkgs() {
  // const {ID}=useParams()
  const [apidata, setapidata] = useState([]);
  useEffect(() => {
    apicall();
  }, []);
  const apicall = () => {
    axios
      .get("https://65a0ef06600f49256fb08ab2.mockapi.io/destinationdata")
      .then((response) => {
        setapidata(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error);
      });
  };
  console.log(apidata);
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Packages
            </h6>
            <h1 class="mb-5">Awesome Packages</h1>
          </div>
          <div class="row g-4 justify-content-center">
            {apidata.map((item) => {
              return (
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="package-item">
                    <div class="overflow-hidden" style={{ height: "200px" }}>
                      <img
                        class="img-fluid"
                        src={item.imageUrl}
                        alt=""
                        style={{ objectFit: "cover", minHeight: "100%" }}
                      />
                    </div>
                    <div class="d-flex border-bottom">
                      <small class="flex-fill text-center border-end py-2">
                        <i class="fa fa-map-marker-alt text-primary me-2"></i>
                        {item.name}
                      </small>
                      <small class="flex-fill text-center border-end py-2">
                        <i class="fa fa-calendar-alt text-primary me-2"></i>
                        {item.days} days
                      </small>
                      <small class="flex-fill text-center py-2">
                        <i class="fa fa-user text-primary me-2"></i>
                        {item.minimumPeople} Person
                      </small>
                    </div>
                    <div class="text-center p-4 " style={{height:"250px"}}>
                      <h3 class="mb-0">${item.amount}</h3>
                      <div class="mb-3">
                        <small class="fa fa-star text-primary"></small>
                        <small class="fa fa-star text-primary"></small>
                        <small class="fa fa-star text-primary"></small>
                        <small class="fa fa-star text-primary"></small>
                        <small class="fa fa-star text-primary"></small>
                      </div>

                      <p id="dic">{item.description}</p>
                      <div class="d-flex justify-content-center mb-2">
                        <Link
                          to={`/pkgDetail/${item.id}`}
                          class="btn btn-sm btn-primary px-3 border-end"
                          style={{ borderRadius: "30px 0 0 30px" }}
                        >
                          Read More
                        </Link>
                        <Link
                          to={`/${item.id}/booknow`}
                          class="btn btn-sm btn-primary px-3"
                          style={{ borderRadius: "0 30px 30px 0" }}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                    {/* <div className="">
                        <span className="bg-success px-2 py-1 rounded-pill">{item.tourType}</span>
                      </div> */}
                  </div>
                </div>
              );
            })}
            {/* <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="package-item">
                  <div class="overflow-hidden">
                    <img class="img-fluid" src="img/package-2.jpg" alt="" />
                  </div>
                  <div class="d-flex border-bottom">
                    <small class="flex-fill text-center border-end py-2">
                      <i class="fa fa-map-marker-alt text-primary me-2"></i>
                      Indonesia
                    </small>
                    <small class="flex-fill text-center border-end py-2">
                      <i class="fa fa-calendar-alt text-primary me-2"></i>3 days
                    </small>
                    <small class="flex-fill text-center py-2">
                      <i class="fa fa-user text-primary me-2"></i>2 Person
                    </small>
                  </div>
                  <div class="text-center p-4">
                    <h3 class="mb-0">$139.00</h3>
                    <div class="mb-3">
                      <small class="fa fa-star text-primary"></small>
                      <small class="fa fa-star text-primary"></small>
                      <small class="fa fa-star text-primary"></small>
                      <small class="fa fa-star text-primary"></small>
                      <small class="fa fa-star text-primary"></small>
                    </div>
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                      diam amet diam eos
                    </p>
                    <div class="d-flex justify-content-center mb-2">
                      <Link
                        to="#"
                        class="btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                      >
                        Read More
                      </Link>
                      <Link
                        to="#"
                        class="btn btn-sm btn-primary px-3"
                        style={{ borderRadius: "0 30px 30px 0" }}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="package-item">
                  <div class="overflow-hidden">
                    <img class="img-fluid" src="img/package-3.jpg" alt="" />
                  </div>
                  <div class="d-flex border-bottom">
                    <small class="flex-fill text-center border-end py-2">
                      <i class="fa fa-map-marker-alt text-primary me-2"></i>
                      Malaysia
                    </small>
                    <small class="flex-fill text-center border-end py-2">
                      <i class="fa fa-calendar-alt text-primary me-2"></i>3 days
                    </small>
                    <small class="flex-fill text-center py-2">
                      <i class="fa fa-user text-primary me-2"></i>2 Person
                    </small>
                  </div>
                  <div class="text-center p-4">
                    <h3 class="mb-0">$189.00</h3>
                    <div class="mb-3">
                      <small class="fa fa-star text-primary"></small>
                      <small class="fa fa-star text-primary"></small>
                      <small class="fa fa-star text-primary"></small>
                      <small class="fa fa-star text-primary"></small>
                      <small class="fa fa-star text-primary"></small>
                    </div>
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                      diam amet diam eos
                    </p>
                    <div class="d-flex justify-content-center mb-2">
                      <Link
                        to="#"
                        class="btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                      >
                        Read More
                      </Link>
                      <Link
                        to="form.html"
                        class="btn btn-sm btn-primary px-3"
                        style={{ borderRadius: "0 30px 30px 0" }}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Privetpkgs;
