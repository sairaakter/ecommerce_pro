import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Devdata } from "./data/developerdata";

export default function AbDeveloper({ abostye }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 400 },
      items: 1,
    },
    smmm: {
      breakpoint: { max: 399, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className={`${abostye.developer}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 p-0">
              <Carousel
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside={true}
                showDots={true} // ✅ Enable Dots
                infinite={true}
                // autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all 0.5s"
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass={abostye.customDots} // ✅ Use CSS Module Class
              >
                {Devdata.map((item, index) => (
                  <div key={index} className={`${abostye.d_card}`}>
                    <img src={item.sorc} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.founder}</p>
                      <div className={`${abostye.d_icons}`}>
                        <Link to="https://x.com/home?&">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.497 5.538C20.882 5.484 21.329 5.343 21.916 5.011C21.61 6.495 21.432 7.168 20.764 8.083C20.745 8.11 20.745 8.142 20.745 8.142C20.745 11.942 19.578 14.757 17.826 16.74C16.073 18.724 13.728 19.881 11.362 20.353C9.745 20.676 7.754 20.573 5.996 20.211C5.118 20.03 4.301 19.785 3.62 19.497C3.037 19.252 2.56 18.978 2.23 18.69C2.661 18.648 3.411 18.554 4.244 18.36C5.244 18.127 6.372 17.749 7.203 17.141C7.157 16.949 7.112 16.92 7.063 16.888C6.305 16.394 4.746 15.379 3.732 13.517C2.667 11.564 2.193 8.663 3.914 4.426C5.579 6.343 7.273 7.66 8.995 8.367C9.577 8.605 9.943 8.724 10.232 8.791C10.451 8.843 10.626 8.865 10.812 8.888C10.87 8.895 10.93 8.903 10.992 8.911L11.287 8.952L11.106 8.771C11.131 7.841 11.425 6.939 11.954 6.173C12.49 5.396 13.244 4.794 14.121 4.444C14.998 4.093 15.959 4.008 16.883 4.201C17.808 4.394 18.655 4.855 19.319 5.527C19.348 5.557 19.39 5.556 19.493 5.556C19.597 5.559 19.703 5.563 19.948 5.571C20.207 5.58 20.498 5.538 20.497 5.538Z"
                              fill="none"
                              stroke="black"
                              strokeWidth="1"
                            />
                          </svg>
                        </Link>
                        <Link to="https://www.instagram.com/">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z"
                              fill="black"
                            />
                          </svg>
                        </Link>
                        <Link to="https://www.instagram.com/">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.5 6.05C9.417 5.113 10.611 4.5 12 4.5C13.4587 4.5 14.8576 5.07946 15.8891 6.11091C16.9205 7.14236 17.5 8.54131 17.5 10V17.5H15.5V10C15.5 9.07174 15.1313 8.1815 14.4749 7.52513C13.8185 6.86875 12.9283 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10V17.5H6.5V5H8.5V6.05ZM1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3ZM0.5 5H2.5V17.5H0.5V5Z"
                              fill="black"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
