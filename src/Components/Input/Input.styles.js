import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  margin-top: 1.6rem;
  max-width: 100%;
  position: relative;
  width:${(props) => props.fullWidth || "fit-content" };

  label {
    font: 400 1.2rem "Noto Sans JP", sans-serif;
    color: #333333;
    display: block;
    margin-block: 0.2rem;
  }

  small {
    font: 400 1rem "Noto Sans JP", sans-serif;
    color: #828282;
    display: block;
  }

  &:focus-within {
    & label,
    & small {
      color: ${(props) => props.color || "#2962ff" };
    }
  }

  ${(props) =>
    props.error &&
    css`
      &:focus-within {
        & label,
        & small {
          color: #d32f2f;
        }
      }
    `}
`;

export const StyledInput = styled.input`
  padding: ${(props) => {
      switch (props.size) {
        case "sm":
          return "1rem";
        case "md":
          return "1.8rem";
        default:
          return "1.8rem";
      }
    }} ${(props) => props.startIcon ? "3.6rem" : "1.2rem" } ;
  padding-right:${(props) => props.endIcon && "3.6rem" } ;
  border-radius: 8px;
  border: 1px solid #828282;
  font: 500 1.4rem "Noto Sans Jp", sans-serif;
  color: #828282;
  outline: none;
  width: ${(props) => props.fullWidth && "100%"};
  max-width: 100%;
  resize: none;

  &:hover {
    border-color: #333;
  }

  &:focus {
    border-color: ${(props) => (props.error ? "#D32F2F" : props.color || "#2962ff")};
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: #f2f2f2;
    `}
`;

export const StartIconSpan = styled.span`
  position: absolute;
  color:#828282;
  bottom: 1.6rem;
  left:0.8rem;
`;

export const EndIconSpan = styled.span`
  position: absolute;
  color:#828282;
  bottom:1.6rem;
  right:1rem;
`;



