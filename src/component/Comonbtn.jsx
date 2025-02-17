export default function Comonbtn({ classone, classtwo, cmntex }) {
  return (
    <>
      <div className={classone}>
        <button type="button" className={classtwo}>
          {cmntex}
        </button>
      </div>
    </>
  );
}
