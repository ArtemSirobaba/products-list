import React from "react";
import { Form } from "react-bootstrap";

import { InputWrapper } from "./styles";

const Input = ({
  touched,
  errors,
  name,
  type,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <InputWrapper error={touched && errors}>
      <div style={{ display: "flex" }}>
        <Form.Control
          className={touched && errors ? "input__error" : null}
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
      {touched && errors ? (
        <h4 className="input__error-message">{errors}</h4>
      ) : null}
    </InputWrapper>
  );
};

export default Input;
