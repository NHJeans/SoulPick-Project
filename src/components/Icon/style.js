import styled, {css} from "styled-components";

export const IconStyled = styled.i(({ size }) => {
  return [
    css`
      font-size: ${size}px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    `,
  ];
});