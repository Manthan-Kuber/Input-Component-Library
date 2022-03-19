import React from "react";
import { InputContainer, StyledInput } from "./Input.styles";

const Input = (props) => {
  return (
    <>
      <InputContainer error={props.error}>
        {props.startIcon ? (
          <span class="material-icons">{props.startIcon}</span>
        ) : null}
        <label>{props.label || "Label"}</label>
        <StyledInput
          placeholder={props.placeholder || "Placeholder"}
          type={props.type}
          error={props.error}
          fullWidth={props.fullWidth}
          disabled={props.disabled}
          value={props.value}
          size={props.size}
        />
        {props.helperText ? <small>{props.helperText}</small> : null}
        {props.endIcon ? (
          <span class="material-icons">{props.endIcon}</span>
        ) : null}
      </InputContainer>
    </>
  );
};

export default Input;
