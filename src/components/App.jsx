import { SharedLayout } from 'components/Layout/SharedLayout';
import { Home } from 'pages/Home';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Tweets = lazy(() => import('../pages/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
