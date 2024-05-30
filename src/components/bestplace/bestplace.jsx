import { useState } from "react";
function BestPlace() {
    const place=[
        {
            place_name:"taj mahal",
            country:"india",
            place_img:"https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            dis:"The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum renowned for its architectural beauty and historical significance. Built between 1632 and 1653, it was commissioned by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who died during childbirth. The Taj Mahal is considered one of the greatest examples of Mughal architecture, which combines elements of Islamic, Persian, Ottoman Turkish, and Indian architectural styles.",


        },
        {
            place_name:"taj mahal",
            country:"india",
            place_img:"https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            dis:"The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum renowned for its architectural beauty and historical significance. Built between 1632 and 1653, it was commissioned by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who died during childbirth. The Taj Mahal is considered one of the greatest examples of Mughal architecture, which combines elements of Islamic, Persian, Ottoman Turkish, and Indian architectural styles.",


        },{
            place_name:"taj mahal",
            country:"india",
            place_img:"https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            dis:"The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum renowned for its architectural beauty and historical significance. Built between 1632 and 1653, it was commissioned by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who died during childbirth. The Taj Mahal is considered one of the greatest examples of Mughal architecture, which combines elements of Islamic, Persian, Ottoman Turkish, and Indian architectural styles.",


        },{
            place_name:"taj mahal",
            country:"india",
            place_img:"https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            dis:"The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum renowned for its architectural beauty and historical significance. Built between 1632 and 1653, it was commissioned by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who died during childbirth. The Taj Mahal is considered one of the greatest examples of Mughal architecture, which combines elements of Islamic, Persian, Ottoman Turkish, and Indian architectural styles.",


        },{
            place_name:"taj mahal",
            country:"india",
            place_img:"https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            dis:"The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum renowned for its architectural beauty and historical significance. Built between 1632 and 1653, it was commissioned by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who died during childbirth. The Taj Mahal is considered one of the greatest examples of Mughal architecture, which combines elements of Islamic, Persian, Ottoman Turkish, and Indian architectural styles.",


        },{
            place_name:"taj mahal",
            country:"india",
            place_img:"https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            dis:"The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum renowned for its architectural beauty and historical significance. Built between 1632 and 1653, it was commissioned by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who died during childbirth. The Taj Mahal is considered one of the greatest examples of Mughal architecture, which combines elements of Islamic, Persian, Ottoman Turkish, and Indian architectural styles.",


        }
    ];
    let [blgDefult, setDefult] = useState(true);
    let [addclass, setclass] = useState({ display: "none" });
    let [addclass2, setclass2] = useState({ display: "block" });
    let [btntxt, setbtntxt] = useState("all places");
    function handelblog() {
      if (blgDefult === true) {
        setclass({ display: "block" });
        setclass2({ display: "none" });
        setDefult(!blgDefult);
        setbtntxt("placess less");
      } else {
        setclass({ display: "none" });
        setclass2({ display: "block" });
        setDefult(!blgDefult);
        setbtntxt("all placess");
      }
    }
  return (
    <section className="best_places" id="best_place">
     <section className="our_blog_section px-3">
      <div className="container">
        <div className="blog_header">
          <h3 className="text-md-center text-sm-start">best place to visit</h3>
          <button className="btn btn-primary" onClick={handelblog}>
            {btntxt}
          </button>
        </div>
        <div style={addclass}>
          <div className={`blog_cards row`} id="blog_cards">
            {place.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2 py-2"
                >
                  <img
                    src={item.place_img}
                    className="card-img-top rounded-1"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                    alt="..."
                  />
                  <div className="card-body">
                    <span>{item.country}</span>
                    <h5 className="card-title">{item.place_name}</h5>
                    <p className="card-text crd_txt">{item.dis}</p>
                    <a href="#" className="btn btn-primary">
                      show more
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={addclass2}>
          <div className="blog_card_prent">
            <div className="blog_cards_scroll" id="blog_cards_scroll">
              {place.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2 mx-3 py-2"
                  >
                    <img
                      src={item.place_img}
                      className="card-img-top rounded-1"
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.place_name}</h5>
                      <span>{item.country}</span><br/>
                      {/* <p className="card-text crd_txt">{item.dis}</p> */}
                      {/* <a href="#" className="btn btn-primary">
                        show more
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
}
export default BestPlace;
