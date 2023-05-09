import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Container>
  );
};
