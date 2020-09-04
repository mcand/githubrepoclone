import styled from 'styled-components';

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  color: #1b1f23;
  height: 48px;
  font-size: 14px;
  border-bottom: 1px solid #e1e4e8;
  font-family: sans-serif;
  justify-content: center;
`;

export const MenuItem = styled.a`
  padding: 8px 16px;
  text-decoration: none;
  font-size: 14px;
  color: #1b1f23;
  text-align: center;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-weight: ${props => (props.active ? '600' : 'normal')};
  background-color: initial;
  line-height: 31px;
  border: 0;
  border-bottom: ${props =>
    props.active ? '2px solid red' : '2px solid rgba(209, 213, 218, 0)'};
  transition: border-bottom-color 0.36s ease-in;
  &:hover {
    border-bottom: ${props => (props.active ? '' : '2px solid #d1d5da')};
  }
  svg {
    margin-right: 4px;
    fill: ${props => (props.active ? '#1b1f24ed' : '#959da5')};
  }
`;
