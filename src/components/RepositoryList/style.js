import styled from 'styled-components';

export const Repositories = styled.div`
  padding: 0 16px 16px 16px;
  h3 {
    padding: 32px;
    margin-top: 32px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #24292e;
  }
`;

export const Repository = styled.div`
  display: flex;
  padding: 24px 0;
  border-bottom: 1px solid #e1e4e8;
  line-height: 26px;
`;

export const Info = styled.div`
  width: 80%;
`;

export const Stars = styled.div`
  width: 20%;
`;

export const UpdatedAt = styled.span`
  display: inherit;
`;

export const Name = styled.a`
  font-size: 20px;
  font-weight: 600;
  color: #0366d6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const MoreAbout = styled.div`
  font-size: 12px;
  color: #586069;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #586069;
  margin-bottom: 8px;
`;

export const Language = styled.span`
  margin-right: 16px;
`;

export const LanguageColor = styled.span`
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 3px;
  vertical-align: middle;
`;

export const License = styled.span`
  font-size: 12px;
  margin-right: 16px;
  svg {
    vertical-align: middle;
    margin-right: 4px;
    fill: #586069;
  }
`;

export const StarsButton = styled.button`
  float: right;
  padding: 3px 12px;
  outline: none;
  font-size: 12px;
  line-height: 20px;
  color: #24292e;
  background-color: #fafbfc;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  appearance: none;
  svg {
    vertical-align: sub;
    margin-right: 4px;
    fill: #6a737d;
  }
  &:hover {
    background-color: #f3f4f6;
    transition-duration: 0.1s;
  }
`;

export const ResultContainer = styled.div`
  color: #24292e;
  display: flex;
  align-items: center;
  padding: 0 0 16px 0;
  border-bottom: 1px solid #eaecef;
  span.result {
    font-weight: 600;
    margin-left: 4px;
  }
  span.number {
    font-weight: 600;
    margin-right: 4px;
  }
  .searched-result {
    flex-grow: 1;
  }
`;

export const ClearButton = styled.a`
  svg {
    margin-right: 4px;
    background-color: #6a737d;
    fill: white;
    border-radius: 4px;
  }
  cursor: pointer;
  color: #586069;
  display: inline-flex;
  align-items: center;
  &:hover {
    color: #0366d6;
    svg {
      background-color: #0366d6;
    }
  }
`;
