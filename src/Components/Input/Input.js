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
      {props.multiline ? (
        <>
          <InputContainer color={props.color}>
            <label>{props.label || "Label"}</label>
            <StyledInput
              as="textarea"
              rows={props.rows}
              placeholder={props.placeholder || "Placeholder"}
              color={props.color}
            />
          </InputContainer>
        </>
      ) : (
        <>
          <InputContainer
            error={props.error}
            fullWidth={props.fullWidth}
            color={props.color}
          >
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
              rows={props.rows}
              color={props.color}
            />
            {props.helperText ? <small>{props.helperText}</small> : null}
            {props.endIcon ? (
              <EndIconSpan className="material-icons">
                {props.endIcon}
              </EndIconSpan>
            ) : null}
          </InputContainer>
        </>
      )}
    </>
  );
};

export default Input;
