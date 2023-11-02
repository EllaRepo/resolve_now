import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import RegisterPage from './views/RegisterPage'
import UserLandingPage from './views/UserLandingPage'
import Navbar from './views/Navbar'

function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Routes>
          <Route element={<PrivateRoute />} path="/dashboard" exact>
            <Route element={<UserLandingPage />} path="/dashboard" exact/>
          </Route>
          <Route element={<LoginPage />} path="/login" exact/>
          <Route element={<RegisterPage />} path="/register" exact />
          <Route element={<HomePage />} path="/" exact />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
