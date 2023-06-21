import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  padding: 0;
`;

export const OptionsItem = styled.li`
  margin-bottom: 10px;
`;

export const OptionsButton = styled.button`
  font-size: 18px;
  padding: 8px 16px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e6e6e6;
  }
`;
