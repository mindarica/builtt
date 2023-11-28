import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors/product/appSelector';

import { Login } from '../../pages/Login/Login';
import { Cart } from '../../pages/Cart/Cart';
import { Products } from '../../pages/Products/Products';

import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';
import { homeURL, cartURL, productsURL } from '../../constants/pagesRoute';
import { NotFound } from '../../components/PageNotFound/PageNotFound';

export const Navigation = () => {
  const isAuthenticated = useSelector(authSelector).user
  return (
    <Router>
      <Routes>
        <Route path={homeURL} element={<Login />} />
        <Route path={productsURL}
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}>
              <Products />
            </PrivateRoute>}
        />
        <Route path={cartURL}
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}>
              <Cart />
            </PrivateRoute>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
