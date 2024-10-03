import "./Button.css";

export const Button = ({ children, type, onClick, ...rest }) => {
  return (
    <button type={type} {...rest} onClick={onClick}>
      {children}
    </button>
  );
};
