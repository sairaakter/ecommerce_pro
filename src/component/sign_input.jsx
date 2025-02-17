export default function Siginput({ name, type, className, id, placeholder }) {
  return (
    <>
      <input
        name={name}
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
      />
    </>
  );
}
