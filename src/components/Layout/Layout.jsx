import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  Container,
  Navigation,
  NavList,
  NavItem,
} from 'components/Layout/Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <NavList>
            <NavItem>
              <Link to="/">
                Home<span></span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">
                Movies<span></span>
              </Link>
            </NavItem>
          </NavList>
        </Navigation>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
