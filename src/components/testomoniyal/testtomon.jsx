function Testomoniyal() {
  let te = [
    {
      image:
        "https://images.pexels.com/photos/20277783/pexels-photo-20277783/free-photo-of-woman-among-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      uname: "divya",
      pra: "loremTempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      star: 3,
    },
    {
      image:
        "https://images.pexels.com/photos/20271383/pexels-photo-20271383/free-photo-of-woman-wearing-beret-on-a-street-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      uname: "divya",
      pra: "loremTempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      star: 3,
    },
    {
      image:
        "https://images.pexels.com/photos/20211222/pexels-photo-20211222/free-photo-of-profile-of-a-boy-wearing-a-black-shirt-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      uname: "harish",
      pra: "loremTempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      star: 3,
    },
  ];
  return (
    <>
      <div
        className="pt-4 pb-5"
        id="testomonial"
        style={{
          // backgroundImage:
            // "url(https://images.pexels.com/photos/20211222/pexels-photo-20211222/free-photo-of-profile-of-a-boy-wearing-a-black-shirt-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            // zIndex:"-1000"
            
        }}
      >
        <div className="container">
          <div class="text-center">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 class="mb-5">Our Clients Say!!!</h1>
          </div>
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
            // data-bs-interval="1000"
          >
            <div class="carousel-inner ">
              {te.map((item, index) => {
                return (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    data-bs-interval="2000"
                  >
                    <div
                      className=""
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div class="card col-10 col-lg-6 col-xl-6">
                        <div className="text-center">
                          <img
                            class="card-img-top"
                            src={`${item.image}`}
                            alt="Card image cap"
                            style={{
                              width: "150px",
                              height: "150px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                          <h3>{item.uname}</h3>
                          <div>&#9733;&#9733;&#9733;&#9733;</div>
                        </div>
                        <div class="card-body">
                          <p class="card-text">{item.pra}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                style={{ backgroundColor: "lime", borderRadius: "10px" }}
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                style={{ backgroundColor: "lime", borderRadius: "10px" }}
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testomoniyal;
