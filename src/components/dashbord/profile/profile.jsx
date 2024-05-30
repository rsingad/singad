import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [apidata, setapidata] = useState([]);
  const navigate = useNavigate();
  const defaultImg = "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png";
  const loginid = localStorage.getItem("loginid");
  console.log(loginid);

  useEffect(() => {
    apicall();
  }, []);

  const apicall = () => {
    axios
      .get("https://65a0ef06600f49256fb08ab2.mockapi.io/users")
      .then((response) => {
        setapidata(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error);
      });
  };

  let user = apidata.find((prusr) => prusr.id == loginid);
  console.log(user);

  const convertUnixToHumanReadable = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZoneName: "short",
    });
  };
  const [p, setp] = useState("password");
  function changetype() {
    setp((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <>
      <div className="mainprofilebox pb-5">
        <div className="col">
          <div className="user-profile">
            <div className="row text-center justify-content-around" id="profrow">
              <div className="col-10 col-lg-5">
                <Link to="/bookinghistory" className="btn btn-primary rounded-pill py-2 px-3">
                <i class="fa-solid fa-clock-rotate-left"></i>
                  <span> Booking history</span>
                </Link>
              </div>
              <div className="col-10 col-lg-5">
                <Link to="/wishlistpage" className="btn btn-primary rounded-pill py-2 px-3">
                <i class="fa-solid fa-heart"></i>
                  <span> Wishlist</span>
                </Link>
              </div>
              <div className="col-10 col-lg-5">
                <Link to="/Profile" className="btn btn-primary rounded-pill py-2 px-3">
                  <i className="fa-solid fa-user"></i>
                  <span> Profile edit</span>
                </Link>
              </div>
              <div className="col-10 col-lg-5">
                <Link to="/chatbox" className="btn btn-primary rounded-pill py-2 px-3">
                <i class="fa-solid fa-comments"></i>
                  <span> Customer support</span>
                </Link>
              </div>
              <div className="col-10 col-lg-5">
                <Link
                  className="btn btn-primary rounded-pill py-2 px-3"
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("loginid");
                    window.location.href = "/login";
                  }}
                >
                  <i class="fa-solid fa-right-from-bracket"></i>
                  <span> Log out</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="card mx-auto col-12">
            <div className="card-body text-center">
              <h5 className="card-title">Profile</h5>
              <div>
                <label className="avatar">
                  <img
                    src={user ? user.imgg || defaultImg : defaultImg}
                    alt=""
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      
                    }}
                  />
                </label>
              </div>
              {user ? (
                <div className="">
                  <h4 className="card-subtitle mb-2 text-muted">{user.firstName} {user.lastName}</h4>
                  <input type={p} value={user.password} readOnly />
                  <label style={{ backgroundColor: "white",marginLeft:"-25px",cursor:"pointer" }} onClick={changetype} htmlFor="">
                    <i className="fa-solid fa-eye"></i>
                  </label>
                  <div className="row">
                    <div className="card-text col-12 col-lg-6">
                      <h4>Email:</h4>
                      <div>
                        <input type="text" value={user.email} className="rounded-1" readOnly />
                      </div>
                    </div>
                    <div className="card-text col-12 col-lg-6">
                      <strong>Phone:</strong>
                      <div>
                        <input type="text" value={user.phoneNumber} className="rounded-1" readOnly />
                      </div>
                    </div>
                    <div className="card-text col-12 col-lg-6">
                      <strong>Country:</strong>
                      <div>
                        <input type="text" value={user.country} className="rounded-1" readOnly />
                      </div>
                    </div>
                    <div className="card-text col-12 col-lg-6">
                      <strong>Gender:</strong>
                      <div>
                        <input type="text" value={user.gender} className="rounded-1" readOnly />
                      </div>
                    </div>
                    <div className="card-text col-12 col-lg-6">
                      <strong>Birthdate:</strong>
                      <div>
                        <input type="text" value={user.birthdate} className="rounded-1" readOnly />
                      </div>
                    </div>
                    <div className="card-text col-4 col-lg-6">
                      <strong>Account Created (Time):</strong>
                      <div>
                        <input
                          type="text"
                          value={convertUnixToHumanReadable(user.time)}
                          className="rounded-1"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading user data...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
