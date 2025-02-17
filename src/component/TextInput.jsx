export default function TextInput({
  htmlFor,
  type,
  id,
  labal,
  sppn,
  c_labal,
  content_styl,
  value,
  placeholder,
  lab_styl,
  chekinpu_styl,
  onChange, // ✅ এই লাইন যোগ করলাম
  m_botom,
}) {
  return (
    <>
      <div className="">
        {labal ? (
          <label
            htmlFor={htmlFor}
            className={`form-label ${lab_styl} ${c_labal}`}
          >
            {labal}
            <span className="text-danger">{sppn}</span>
          </label>
        ) : (
          ""
        )}

        <div className={`${m_botom}`}>
          <input
            type={type}
            className={`form-control ${chekinpu_styl} ${content_styl}`}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange} // ✅ এই লাইন যোগ করলাম
            required
          />
        </div>
      </div>
    </>
  );
}
