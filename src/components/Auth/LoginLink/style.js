import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #555;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #a0d2cf;
  }

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #a0d2cf;
    transition: width 0.3s ease;
  }
`;