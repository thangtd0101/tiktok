import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Element />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
