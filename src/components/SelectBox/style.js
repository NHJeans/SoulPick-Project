import {keyframes, styled} from "styled-components";

const dropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SelectBoxListContainer = styled.ul`
  position: absolute;
  right: 28px;
  top: 72px;
  width: 160px;
  border-radius: 8px;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #333333;
  overflow: hidden;

  animation: ${dropdownAnimation} 0.3s ease-in-out;
`
export const SelectBoxListItem = styled.li`
  padding: 14px;
  border-bottom: 1px solid #e1e1e1;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f5f5f5;
    color: #5CADA8;
    border: none;
`