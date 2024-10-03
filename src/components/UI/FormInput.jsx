import "./FormInput.css";
import { Input } from "./Input";

export const FormInput = ({ inputType, labelText, id, value, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={id}>{labelText}</label>
      <Input id={id} type={inputType} value={value} onChange={onChange} />
    </div>
  );
};
