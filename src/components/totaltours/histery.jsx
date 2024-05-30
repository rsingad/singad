function Tourhistory() {
  let his = [
    {
      title: "total tours",
      num: "200",
      pra: " we are proud to have successfully organized 200 tours worldwide, offering unforgettable travel experiences with expertly crafted itineraries and personalized services. Join us to discover the wonders of the world with a trusted travel partner.",
      icn:"fa-solid fa-mountain-sun"
    },
    {
      title: "satisfied customers",
      num: "5500",
      pra: "we take pride in having provided unforgettable travel experiences to over 5,500 satisfied customers.",
      icn:"fa-solid fa-people-roof",
    },
    {
      title: "branches",
      num: "25",
      pra: "we are proud to offer unforgettable travel experiences across 25 countries and operate with branches in 25 different locations.",
      icn:"fa-solid fa-hat-cowboy"
    },
  ];
  return (
    <section id="tourhistory" className="py-5">
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-12 col-md-4 text-center py-4">
            <h1>
              <span>200</span>
            </h1>
            <div>
              <span>total tours</span>
            </div>
          </div> */}
          {his.map((item) => (
            <div
              className="col-lg-4 col-sm-12 col-12 mt-auto mb-1   wow fadeInUp"
              data-wow-delay="0.3s"
              key={item.title}
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <div className="text-center">
                    <i className={`fa-3x  text-primary mb-4 ${item.icn}`}></i>
                  </div>
                  <h3 className="text-center bg-primary">{item.title}</h3>
                  <h1 style={{ color: "blue", textAlign: "center" }}>
                    {item.num}
                  </h1>
                  <p style={{ color: "gray" }}>{item.pra}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Tourhistory;
