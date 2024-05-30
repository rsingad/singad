import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../login/l.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [apidata, setApidata] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    axios
      .get("https://65a0ef06600f49256fb08ab2.mockapi.io/users")
      .then((response) => {
        console.log(response.data); // Inspect API response
        setApidata(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error);
      });
  }, []);
  console.log(apidata)

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);

    // If no errors, proceed to check login
    if (Object.keys(newErrors).length === 0) {
      const user = apidata.find(
        (user) => user.email === formData.email && user.password === formData.password
      );
      console.log('User found:', user); // Debug statement
      if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loginid", `${user.id}`);
        navigate("/privethomepage"); // Redirect to a dashboard or home page
      } else {
        alert("Invalid credentials");
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
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
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
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
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <Link to={"/forgot-password"} className="link-primary">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
          <div className="card-title text-center pt-5 pb-5">
            <Link
              to="/SignUpForm"
              className="btn btn-primary rounded-pill py-2 px-4"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
