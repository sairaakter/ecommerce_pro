export default function Wibtn({ clsbtm, src }) {
  return (
    <>
      <div className={`favrat ${clsbtm}`}>
        <img src={src} className="img-fluid imgcolochang" />
      </div>
    </>
  );
}
