import { Link } from "react-router-dom";

function Header() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <>
     
        <header style={{ display: isLoggedIn ? "none" : "block" }}>
          <nav
            class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
            style={{ backgroundColor: "transparent", backdropFilter:"blur(10px)" }}
          >
            <Link to="" class="navbar-brand p-0">
              <h1 class="text-primary m-0">
                <i class="fa fa-map-marker-alt me-3"></i>Tourscape
              </h1>
              {/* <img src="img/logo.png" alt="Logo"> */}
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto py-0">
                <Link to="/" class="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" class="nav-item nav-link">
                  About
                </Link>
                <Link to="/services" class="nav-item nav-link">
                  Services
                </Link>
                <Link to="/packages" class="nav-item nav-link">
                  Packages
                </Link>
                <div class="nav-item dropdown">
                  <Link
                    // to="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div class="dropdown-menu m-0">
                    <Link to="/destinetion" class="dropdown-item">
                      Destination
                    </Link>
                    <Link to="booking.html" class="dropdown-item">
                      Booking
                    </Link>
                    <Link to="team.html" class="dropdown-item">
                      Travel Guides
                    </Link>
                    <Link to="/testomonial" class="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to="/notfound" class="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link to="/contect" class="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <Link to="/login" class="btn btn-primary rounded-pill py-2 px-4">
                log in
              </Link>
            </div>
          </nav>
        </header>
        
     
    </>
  );
}
export default Header;
