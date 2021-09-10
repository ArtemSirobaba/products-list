import styled from "styled-components";

import { Form } from "react-bootstrap";

export const InputWrapper = styled(Form.Group)`
  margin-bottom: 0;
  width: 100%;
  margin-bottom: 15px;
  input {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    padding: 6px 11px;
    box-sizing: border-box;
    background: transparent;
    color: black;
    height: 100%;
    margin-bottom: 15px;
  }

  input:focus {
    outline: none;
    background-color: transparent;
  }

  input::placeholder {
    color: #3c516a;
  }

  .input__error {
    border: 2px solid red;
  }
  .input__error-message {
    color: red;
  }
`;
