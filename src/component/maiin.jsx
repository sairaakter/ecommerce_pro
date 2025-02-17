import aple from "../assets/aple.png";
import black from "../assets/black.png";
import mobile from "../assets/mobile.png";
import "../style/main.css";

export default function Main() {
  return (
    <>
      {/* <!-- sidebar-wrapper  --> */}
      <main className="page-content">
        <div className="container-fluid">
          <div className="container c_pd">
            <div className="row">
              <div className="col-12 col-sm-12 p-0">
                {/* <!-- Bootstrap Carousel --> */}
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    {/* <!-- item1 --> */}
                    <div className="carousel-item c_item active">
                      <img
                        src={black}
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                      <div className="carousel-caption d-col-block d-md-block">
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-12 p-0">
                            <div className="alimen">
                              <div className="aple">
                                <img src={aple} className="ap_img" />
                                <p>iPhone 14 Series</p>
                              </div>

                              <p className="voucher">
                                Up to 10% <br />
                                off Voucher
                              </p>
                              <a href="#" className="bot">
                                <span className="bop">Shop Now </span>
                                <span className="boptwo">
                                  <svg
                                    width="19"
                                    height="16"
                                    viewBox="0 0 19 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.5 8H18M18 8L11 1M18 8L11 15"
                                      stroke="#FAFAFA"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-12 p-0">
                            <div className="m_img">
                              <img src={mobile} className="img-fluid" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- item2 --> */}
                    {/* <!-- Additional Slides --> */}
                    <div className="carousel-item c_item">
                      <img
                        src="https://via.placeholder.com/800x400/000000/FFFFFF?text=Second+Slide"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    {/* <!-- item3 --> */}
                    {/* <!-- Additional Slides --> */}
                    <div className="carousel-item c_item">
                      <img
                        src="https://via.placeholder.com/800x400/000000/FFFFFF?text=three+Slide"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    {/* <!-- item4 --> */}
                    {/* <!-- Additional Slides --> */}
                    <div className="carousel-item c_item">
                      <img
                        src="https://via.placeholder.com/800x400/000000/FFFFFF?text=four+Slide"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    {/* <!-- item5 --> */}
                    {/* <!-- Additional Slides --> */}
                    <div className="carousel-item c_item">
                      <img
                        src="https://via.placeholder.com/800x400/000000/FFFFFF?text=five+Slide"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                  </div>

                  {/* <!-- Carousel Controls --> */}
                  {/* <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Next</span>
                              </button> --> */}

                  {/* <!-- Carousel Indicators (Optional) --> */}
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      className="custom"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      className="custom"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="0"
                      className="active custom"
                      aria-current="true"
                    ></button>
                    <button
                      type="button"
                      className="custom"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="3"
                    ></button>
                    <button
                      type="button"
                      className="custom"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="4"
                    ></button>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
