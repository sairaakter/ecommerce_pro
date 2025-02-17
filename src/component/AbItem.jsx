export default function AbItem({ abostye, folowers, selers, svgicn }) {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-6 col-6">
        <div className={`${abostye.first_on}`}>
          <div className={`card custom-card ${abostye.cm_card}`}>
            {/* <!-- Image Section --> */}
            <div
              className={`position-relative ${abostye.image_container} ${abostye.catag_contan}`}
            >
              <div className={`${abostye.cag_item}`}>
                {svgicn}
                <h2>{folowers} </h2>
                <p>{selers}</p>
              </div>
            </div>
            {/* <!-- Card Body --> */}
          </div>
        </div>
      </div>
    </>
  );
}
