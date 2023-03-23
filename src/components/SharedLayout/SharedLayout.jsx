import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link,
} from 'components/SharedLayout/SharedLayout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
