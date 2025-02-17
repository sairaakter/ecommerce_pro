import atigimg from "../assets/a_rigimg.png";

export default function CusContainer({ abostye }) {
  return (
    <>
      <div className={`container ${abostye.container_cus}`}>
        <div className={`${abostye.abo_con}`}>
          <div className="row">
            <div className="col-lg-6 col-12 d-flex">
              <div className={`${abostye.a_left}`}>
                <h1>Our Story</h1>
                <p>
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p className={`${abostye.a_gatar}`}>
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-0">
              <div className={`${abostye.a_right}`}>
                <img src={atigimg} className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
