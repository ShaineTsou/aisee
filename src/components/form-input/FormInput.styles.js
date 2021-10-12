import styled, { css } from "styled-components";

const shrinkLabel = css`
  top: -1.3em;
  font-size: 0.85em;
`;

export const InputGroup = styled.div`
  position: relative;
  margin: 35px 0;

  .form-input {
    width: 100%;
    display: block;
    background-color: transparent;
    padding: 10px;

    outline: none;
    border: none;
    border-bottom: 1px solid snow;

    color: snow;
    font-size: 1.2em;

    &:focus ~ .form-input-label {
      ${shrinkLabel}
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    position: absolute;
    left: 5px;
    top: 10px;

    font-size: 1em;
    font-weight: normal;

    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabel}
    }
  }
`;
