import "../../tem.css";
import Tourhistory from "../totaltours/histery";
function About() {
  return (
    // <section className="about py-5" id="about">
    //   <div className="container px-4">
    //     <div>
    //       <h3 className="text-center  text-primary">
    //         <u>about us</u>
    //       </h3>
    //     </div>
    //     <div className="">
    //       <h4>Welcome to [Your Company Name]</h4>
    //       <p>
    //         At [Your Company Name], we believe that travel is not just about
    //         visiting new places, but about experiencing new cultures, making
    //         lasting memories, and gaining fresh perspectives. Since our
    //         inception in [Year Founded], we have been dedicated to crafting
    //         personalized travel experiences that cater to the unique desires and
    //         interests of our clients.
    //       </p>
    //     </div>
    //     <div className="">
    //       <h4>our misson</h4>
    //       <p>
    //         Our mission is to make your travel dreams a reality. We strive to
    //         provide exceptional service, expert knowledge, and a passion for
    //         discovery. Whether you're seeking a relaxing beach getaway, an
    //         adventurous trek through rugged landscapes, or an immersive cultural
    //         journey, we are here to design the perfect itinerary for you.
    //       </p>
    //     </div>
    //     <div className="">
    //       <h4>Why Choose Us?</h4>
    //       <p>
    //         <span style={{ fontWeight: "bold" }}>
    //           Expertise and Experience:
    //         </span>{" "}
    //         With years of experience in the travel industry, our team of
    //         dedicated travel specialists possess extensive knowledge of
    //         destinations worldwide. We work tirelessly to stay updated on the
    //         latest travel trends and offer you insider tips to ensure a seamless
    //         and unforgettable journey.
    //       </p>
    //       <p>
    //         <span style={{ fontWeight: "bold" }}>Personalized Service:</span>
    //         We understand that every traveler is unique. That's why we take the
    //         time to get to know you and your travel preferences, crafting a
    //         tailor-made itinerary that reflects your interests, budget, and
    //         schedule. From solo travelers to large groups, we handle every
    //         detail with precision and care.
    //       </p>
    //       <p>
    //         <span style={{ fontWeight: "bold" }}>Value for Money: </span>
    //         We believe in providing exceptional value without compromising on
    //         quality. Our strong relationships with hotels, airlines, and local
    //         tour operators enable us to offer competitive pricing and exclusive
    //         deals you won't find elsewhere.
    //       </p>
    //       <p>
    //         <span style={{ fontWeight: "bold" }}>Sustainable Travel: </span>
    //         We are committed to promoting responsible tourism. Our eco-friendly
    //         travel options and partnerships with sustainable organizations
    //         ensure that your travels contribute positively to the environment
    //         and local communities.
    //       </p>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="container">
    //     <h3>location to visit</h3>
    //     <div className="">
    //       <iframe
    //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14264.001657034463!2d73.48112520540124!3d26.648469178887275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a75c24b2f3043%3A0xac5d89a3cae7028f!2sBhopalgarh%2C%20Rajasthan%20342603!5e0!3m2!1sen!2sin!4v1715680398169!5m2!1sen!2sin"
    //         loading="lazy"
    //         referrerPolicy="no-referrer-when-downgrade"
    //         className="col-12"
    //         style={{height:"500px",borderRadius:"20px",overflow:"hidden"}}
    //       ></iframe>
    //     </div>
    //   </div>
    // </section>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{minHeight:"400px"}}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="img/about.jpg"
                alt=""
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to <span className="text-primary">Tourist</span>
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>First Class
                  Flights
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Handpicked
                  Hotels
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>5 Star
                  Accommodations
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Latest
                  Model Vehicles
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>150 Premium
                  City Tours
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>24/7
                  Service
                </p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
        <Tourhistory/>
      </div>
    </div>
  );
}
export default About;
