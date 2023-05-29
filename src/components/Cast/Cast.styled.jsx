import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ListItem = styled.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  max-width: min-content;
  background-color: #f2efef;
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  img {
    max-width: 182px;
    border-radius: 8px;
  }
  span {
    color: #2b69dbf0;
  }
`;
