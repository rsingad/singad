import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function PrivetPkgDetail() {
  const loginId=localStorage.getItem("loginid")
  console.log(loginId)
  const { ID } = useParams();
  const [pkg, setPkg] = useState(null);
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    const apicall = async () => {
      try {
        const response = await axios.get(
          "https://65a0ef06600f49256fb08ab2.mockapi.io/destinationdata"
        );
        setApidata(response.data);
      } catch (error) {
        console.error(error.message);
        alert(error);
      }
    };
    apicall();
  }, []);

  useEffect(() => {
    if (apidata.length > 0) {
      const clickedItem = apidata.find((item) => item.id === ID);
      setPkg(clickedItem);
    }
  }, [apidata, ID]);

  if (!pkg) {
    return <div>Loading...</div>;
  }
  const handleuserWish = async () => {
    try {
      const response = await axios.post(
        `https://66566a099f970b3b36c54ff7.mockapi.io/booked`,
        {
          transactionId: "",
          productid: ID,
          userid: loginId,
          type: "wish",
        }
      );
      console.log(response.data);
      alert("added wishlist");
    } catch (error) {
      console.error(error.message);
      alert("Error confirming booking");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        {/* <div
          className="row"
            style={{minHeight:"500px",maxHeight:"700px",height:"100%",overflow:"hidden"}}
        >
          <div className="col-10 col-lg-7 col-xl-6  ms-auto">
            {" "}
            <img
              src={pkg.imageUrl}
              className="card-img-top"
              alt={pkg.name}
              style={{
                minHeight: "300px",
                maxHeight: "300px",
                width: "100%",
                objectFit: "cover",
                borderRadius:"20px 0px 20px 0px"
                
              }}
            />
          </div>
          <div className="col-10 col-lg-7 col-xl-6 me-auto">
            {" "}
            <img
              src={pkg.imageUrl}
              className="card-img-top"
              alt={pkg.name}
              style={{
                minHeight: "300px",
                maxHeight: "500px",
                width: "100%",
                objectFit: "cover",
                marginTop:"-20px",
                borderRadius:"30px 30px 30px 30px"
              }}
            />
          </div>
          <div className="col-10 col-lg-7 col-xl-7  me-auto">
            {" "}
            <img
              src={pkg.imageUrl}
              className="card-img-top"
              alt={pkg.name}
              style={{
                minHeight: "300px",
                maxHeight: "500px",
                width: "100%",
                objectFit: "cover",
                marginTop:"-50px"
              }}
            />
          </div>
        </div> */}
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={pkg.imageUrl}
                class=""
                alt="..."
                style={{ objectFit: "cover", height: "500px", width: "100%" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={pkg.imageUrl}
                class=""
                alt="..."
                style={{ objectFit: "cover", height: "500px", width: "100%" }}
              />

              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={pkg.imageUrl}
                class=""
                alt="..."
                style={{ objectFit: "cover", height: "500px", width: "100%" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{pkg.name}</h5>
          <p className="card-text">{pkg.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Duration: {pkg.days} days</li>
            <li className="list-group-item">Amount: ${pkg.amount}</li>
            <li className="list-group-item">People: {pkg.minimumPeople}</li>
            <li className="list-group-item">Tour Type: {pkg.tourType}</li>
            <li className="list-group-item">Tour Points: {pkg.tourPoints}</li>
          </ul>
          <div className="pt-4 justify-content-around d-flex">


            <button
              // to="/bookinghistory"
              className="btn btn-primary rounded-pill py-2 px-3"
              onClick={handleuserWish}
            >
              <i class="fa-solid fa-cart-plus"></i>
              <span> add to wishlist</span>
            </button>
            <Link
              to={`/${ID}/bookNow`}
              className="btn btn-primary rounded-pill py-2 px-3"
            >
              <i class="fa-regular fa-handshake"></i>
              <span> book now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivetPkgDetail;
