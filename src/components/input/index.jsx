import { StyledInput } from "./style.js";

// eslint-disable-next-line react/prop-types
export const Input = ({ register, name, text, type }) => {
  if (!type) {
    type = "text";
  }

  return (
    <StyledInput>
      <label htmlFor={name}>{text}</label>
      <input {...register(name)} id={name} type={type} />
    </StyledInput>
  );
};
