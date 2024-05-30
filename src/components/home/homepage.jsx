import Bestplace from "../bestplace/bestplace";
import OverLatestBlog from "../over latest blog/latestblog";
import About from "../aboutpage/about";
import Explore from "../exploreallworld/explore";
import Tourhistory from "../totaltours/histery";
import { useContext } from "react";
import { Createcntxt } from "../context/createcontext";
import Services from "../services/service";
import PopularDestination from "../populardes/popdestination";
import OsmPkg from "../aosmpackg/osmpkg";
import Process from "../process/process";
import Guides from "../travelguid/guid";
import Testomoniyal from "../testomoniyal/testtomon";
import Header from "../headerSection/header";
import { Link } from "react-router-dom";

function Homepage() {
  const xx = useContext(Createcntxt);
  // console.log(xx)

  return (
    <>
      {/* <div className="homeSection " id="homeSection">
        <div className="container position-relative ">
          <div className="content">
            <h1 className="text-center">
              <span className="bg-light p-2 fs-1 rounded-3">
                travel with us
              </span>
            </h1>
            <h5 className="text-center p-3">
              <span className="text-white">for the best deal</span>
            </h5>
            <div className="text-center p-3">
              <button className="viewtourbtn p-2 rounded-1">view tours</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="homeSection " id="homeSection">
      <div class="container-fluid mb-5 hero-header">
      {/* <Header/> */}

        <div class="container py-5">
          <div class="row justify-content-center py-5">
            <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 class="display-3 text-white mb-3 animated slideInDown">
                Enjoy Your Vacation With Us
              </h1>
              <p class="fs-4 text-white mb-4 animated slideInDown">
                Tempor erat elitr rebum at clita diam amet diam et eos erat
                ipsum lorem sit
              </p>
              <div class="position-relative w-75 mx-auto animated slideInDown">
              <Link to="/login">
                <button className="viewtourbtn p-2 rounded-1">
                  view tours & book now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <About />
      <Services />
      <PopularDestination />
      <OsmPkg />
      <Process />
      <Guides />
      {/* <Bestplace/> */}
      {/* <Explore/> */}
      <OverLatestBlog />
      <Tourhistory />
      <Testomoniyal />
    </>
  );
}
export default Homepage;
