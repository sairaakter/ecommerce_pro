const CCard = ({
  className,
  sorc,
  carhf,
  price,
  delprice,
  reviews,
  discount,
}) => {
  return (
    <div className={className}>
      <div className="card">
        <img src={sorc} alt={sorc} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{carhf}</h5>
          <p className="card-text">Price: {price}</p>
          <p className="card-text text-muted">Was: {delprice}</p>
          <p className="card-text">{reviews}</p>
          <span className="badge bg-danger">{discount}</span>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CCard;
