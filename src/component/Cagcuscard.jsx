export default function Catgcuscard({ item }) {
  return (
    <div className="catago_card">
      <div className="card custom-card">
        {/* <!-- Image Section --> */}
        <div className="position-relative image-container catag_contan">
          <div className="cag_item">
            <img src={item.sorc} />
            <p>{item.text}</p>
          </div>
        </div>
        {/* <!-- Card Body --> */}
      </div>
    </div>
  );
}
