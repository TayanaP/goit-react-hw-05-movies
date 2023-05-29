import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 10px;
`;

export const Item = styled.li`
  font-size: 14px;
  padding: 6px;
  background-color: #f2efef;
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  span {
    color: #2b69dbf0;
  }
`;

export const Title = styled.h3``;

export const Content = styled.p`
  margin-top: 6px;
`;

export const Info = styled.p``;
