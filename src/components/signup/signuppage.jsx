import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    country: "",
    phoneNumber: "",
  });

  const [x, setX] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExists = apiData.some((item) => item.email === formData.email);
    if (!userExists) {
      const newUser = {
        unique_id: new Date().getTime().toString(), // Unique ID
        addcrd: [],
        chat: [],
        bookpkg: [],
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        birthdate: formData.birthdate,
        gender: formData.gender,
        country: formData.country,
        phoneNumber: formData.phoneNumber,
      };

      axios
        .post("https://65a0ef06600f49256fb08ab2.mockapi.io/users", newUser)
        .then((response) => {
          console.log("User created successfully:", response.data);
          setX(!x);
          alert("Your account has been created successfully");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((error) => {
          console.error(error.message);
          alert("An error occurred while creating your account.");
        });
    } else {
      console.log("User already exists");
      alert("User already exists");
    }
  };

  useEffect(() => {
    axios
      .get("https://65a0ef06600f49256fb08ab2.mockapi.io/users")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [x]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">साइन अप</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    पहला नाम
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    अंतिम नाम
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    ईमेल
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    पासवर्ड
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="birthdate" className="form-label">
                    Birthdate
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    साइन अप
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="card-title text-center pt-5 pb-5">
            <Link
              to="/login"
              className="btn btn-primary rounded-pill py-2 px-4"
            >
              लॉगिन करें
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
