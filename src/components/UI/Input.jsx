import "./Input.css";

export const Input = ({ value, onChange, type, id, ...props }) => {
  return (
    <input value={value} onChange={onChange} type={type} id={id} {...props} />
  );
};




