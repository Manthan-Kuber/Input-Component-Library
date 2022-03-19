import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  margin-top: 1.6rem;
  max-width: 100%;

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
      color: #2962ff;
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
  }} 1.2rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.color || "#828282"};
  font: 500 1.4rem "Noto Sans Jp", sans-serif;
  color: #828282;
  outline: none;
  width: ${(props) => props.fullWidth && "100%"};
  max-width: 100%;


  &:hover {
    border-color: #333;
  }

  &:focus {
    border-color: ${(props) => (props.error ? "#D32F2F" : "#2962ff")};
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: #f2f2f2;
    `}
`; 
