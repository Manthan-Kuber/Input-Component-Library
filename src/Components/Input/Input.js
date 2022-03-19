import React from "react";
import {
  InputContainer,
  StyledInput,
  StartIconSpan,
  EndIconSpan,
} from "./Input.styles";

const Input = (props) => {
  return (
    <>
      <InputContainer error={props.error} fullWidth={props.fullWidth}>
        {props.startIcon ? (
          <StartIconSpan className="material-icons">
            {props.startIcon}
          </StartIconSpan>
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
          startIcon={props.startIcon}
          endIcon={props.endIcon}
          rows = {props.rows}
        />
        {props.helperText ? <small>{props.helperText}</small> : null}
        {props.endIcon ? (
          <EndIconSpan className="material-icons">{props.endIcon}</EndIconSpan>
        ) : null}
      </InputContainer>
    </>
  );
};

export default Input;
