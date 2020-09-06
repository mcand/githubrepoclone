import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin-top: -30px;
  width: 262px;
  padding: 0 16px;
  h1 {
    margin: 16px 0px;
  }
`;

export const FullName = styled.span`
  font-size: 26px;
  line-height: 1.25;
  font-family: sans-serif;
  display: block;
`;

export const AccountName = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #666;
  display: block;
`;

export const SecondaryButton = styled.button`
  outline: none;
  width: 100%;
  position: relative;
  display: inline-block;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid;
  border-radius: 6px;
  appearance: none;
  color: #24292e;
  background-color: #fafbfc;
  border-color: rgba(27, 31, 35, 0.15);
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  &:hover {
    background-color: #f3f4f6;
    transition-duration: 0.1s;
  }
  &:active {
    background-color: #edeff2;
    box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
    transition: none;
  }
`;

export const FollowInfo = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  a {
    text-decoration: none;
    color: #586069;
    display: flex;
    &:hover {
      color: #0366d6;
      svg {
        fill: #0366d6;
      }
    }
    span {
      font-weight: 600;
      margin-right: 4px;
    }
  }
  svg {
    fill: #6a737d;
    margin-right: 4px;
  }

  span {
    &.separator {
      margin: 0 4px;
      padding-bottom: 6px;
    }
  }
`;

export const Location = styled.div`
  color: #586069;
  margin-top: 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
  svg {
    fill: #6a737d;
    margin-right: 4px;
  }
`;

export const Email = styled.div`
  color: #586069;
  margin-top: 8px;
  display: flex;
  align-items: center;
  font-size: 14px;
  svg {
    fill: #6a737d;
    margin-right: 4px;
  }
`;
