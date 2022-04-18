import React from "react";
import styled from "styled-components";
import { theme } from "../../../src/assets/theme/theme";

interface IProps {
  colorName: keyof typeof theme.colors;
  onClick?: () => void;
}

export const IconHeart = ({ colorName, onClick }: IProps) => {
  return (
    <Svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" colorName={colorName} onClick={onClick}>
      <path
        d="M11 18.25C11 18.25 1.625 13 1.625 6.62501C1.62519 5.49826 2.01561 4.40635 2.72989 3.53493C3.44416 2.66351 4.4382 2.06636 5.54299 1.84501C6.64778 1.62367 7.79514 1.79179 8.78999 2.32079C9.78484 2.84979 10.5658 3.70702 11 4.74673L11 4.74673C11.4342 3.70702 12.2152 2.84979 13.21 2.32079C14.2049 1.79179 15.3522 1.62367 16.457 1.84501C17.5618 2.06636 18.5558 2.66351 19.2701 3.53493C19.9844 4.40635 20.3748 5.49826 20.375 6.62501C20.375 13 11 18.25 11 18.25Z"
        stroke="#0D1116"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Svg = styled.svg<{ colorName: keyof typeof theme.colors }>`
  cursor: pointer;
  path {
    stroke: ${({ colorName }) => theme.colors[colorName]};
  }
  &:hover {
    path {
      stroke: ${theme.colors.red};
    }
  }
`;
