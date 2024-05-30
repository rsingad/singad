import { useState } from "react";
function OverLatestBlog() {
  const b = [
    {
      img: "https://images.pexels.com/photos/3027138/pexels-photo-3027138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "nepal",
      dis: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
      id: 5,
    },
    {
      img: "https://images.pexels.com/photos/4430306/pexels-photo-4430306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "goa",
      dis: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
      id: 6,
    },
    {
      img: "https://images.pexels.com/photos/3538236/pexels-photo-3538236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "thailend",
      dis: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
      id: 1,
    },
    {
      img: "https://images.pexels.com/photos/15896015/pexels-photo-15896015/free-photo-of-laxmanjhula-ramjhula-rishikesh-uttarakhand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "kedaarnath",
      dis: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
      id: 2,
    },
    {
      img: "https://images.pexels.com/photos/3027138/pexels-photo-3027138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "nepal",
      dis: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
      id: 3,
    },
    {
      img: "https://images.pexels.com/photos/4430306/pexels-photo-4430306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "goa",
      dis: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
      id: 4,
    },
  ];
  let [blgDefult, setDefult] = useState(true);
  let [addclass, setclass] = useState({ display: "none" });
  let [addclass2, setclass2] = useState({ display: "block" });
  let [btntxt, setbtntxt] = useState("shoe all");
  function handelblog() {
    if (blgDefult === true) {
      setclass({ display: "block" });
      setclass2({ display: "none" });
      setDefult(!blgDefult);
      setbtntxt("short blog");
    } else {
      setclass({ display: "none" });
      setclass2({ display: "block" });
      setDefult(!blgDefult);
      setbtntxt("all blog");
    }
  }
  return (
    <section className="our_blog_section px-3">
      <div className="container">
        <div className="blog_header">
          <h3 className="text-md-center text-sm-start">our letest blog</h3>
          <button className="btn btn-primary" onClick={handelblog}>
            {btntxt}
          </button>
        </div>
        <div style={addclass}>
          <div className={`blog_cards row`} id="blog_cards">
            {b.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2 py-2"
                >
                  <img
                    src={item.img}
                    className="card-img-top rounded-1"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {/* <p className="card-text crd_txt">{item.dis}</p> */}
                    <a href="#" className="btn btn-primary">
                      watch now
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
              {b.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2 mx-3 py-2"
                  >
                    <img
                      src={item.img}
                      className="card-img-top rounded-1"
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      {/* <p className="card-text crd_txt">{item.dis}</p> */}
                      <a href="#" className="btn btn-primary">
                        watch block
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OverLatestBlog;
