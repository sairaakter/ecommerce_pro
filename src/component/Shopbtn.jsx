export default function Shopbtn({ className, children, onClick }) {
  return (
    <>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </>
  );
}
