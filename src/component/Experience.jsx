import "../style/Experience.css";

export default function Experience() {
  return (
    <>
      <section className="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="e_content">
                <div className="main-con">
                  <p>Categories</p>
                  <h1>
                    Enhance Your
                    <br />
                    Music Experience
                  </h1>
                  <div className="d-flex">
                    <div className="e_time">
                      <h2>23</h2>
                      <p>Hours</p>
                    </div>
                    <div className="e_time">
                      <h2>05</h2>
                      <p>Days</p>
                    </div>
                    <div className="e_time">
                      <h2>59</h2>
                      <p>Minutes</p>
                    </div>
                    <div className="e_time">
                      <h2>35</h2>
                      <p>Seconds</p>
                    </div>
                  </div>

                  <div className="experienc_button">
                    <button
                      type="button"
                      className="wcomon_btn e_buton"
                      data-bs-target="#axmam"
                      data-bs-slide="next"
                    >
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
