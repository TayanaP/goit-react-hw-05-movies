import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 12px;
`;

export const Item = styled.li`
  font-weight: 400;
  font-size: 14px;

  background-color: #2a2a2a21;
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: 5px;
  }

  a:hover,
  a:focus {
    background-color: #a3c9e682;
  }

  a {
    display: block;
    padding: 16px 16px;
  }
`;
