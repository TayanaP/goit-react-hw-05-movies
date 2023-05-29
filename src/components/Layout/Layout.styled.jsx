import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
`;

export const Navigation = styled.nav`
  margin-bottom: 24px;
`;

export const NavList = styled.ul`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  display: flex;
  gap: 20px;
  padding: 10px;
`;

export const NavItem = styled.li`
  color: #4e799d;

  a:hover,
  a:focus {
    color: #a3c9e682;

    span {
      color: white;
    }
  }
`;
