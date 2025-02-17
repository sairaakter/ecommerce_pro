export default function DeliItem({ abostye, guranty, free, src }) {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-12">
        <div className={`${abostye.firs_deliv}`}>
          <img src={src} className={`img-fluid ${abostye.f_deliimg}`} />
          <div className={`${abostye.firs_deliv_con}`}>
            <h2>{guranty}</h2>
            <p>{free}</p>
          </div>
        </div>
      </div>
    </>
  );
}
