function Explore() {
  return (
    <section id="explore">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 d-flex justify-content-center">
          <img
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="col-6 col-sm-6 col-md-12 col-lg-8"
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              opacity: 0.9,
              boxShadow: "2px 2px 2px 2px black",
            }}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <div style={{ zIndex: "10", color: "#fff", display: "grid" }}>
            <h2 className="text-center" style={{ zIndex: "100" }}>
              explore all corner of the world with us
            </h2>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham
            </p>
            <div className="row text-center">
              <div className="col-6 col-sm-6 col-md-6 col-xl-3 ">
              <i className="fa-solid fa-plane-circle-check"></i>
                <span> Flight</span>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-xl-3">
                <i className="fa-solid fa-wifi"></i>
                <span> Wi-Fi</span>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-xl-3">
              <i className="fa-solid fa-hotel"></i>
                <span> Hotel</span>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-xl-3">
              <i className="fa-solid fa-burger"></i>
                <span> Food</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
export default Explore;
