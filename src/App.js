import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Home from './components/Home';
import NewSportsComplex from './components/NewSportsComplex';
import OldSportsComplex from './components/OldSportsComplex';
import TableTennis from './components/TableTennis';
import Badminton from './components/Badminton';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check if the user is logged in

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/new-sports-complex" element={isLoggedIn ? <NewSportsComplex /> : <Navigate to="/" />} />
        <Route path="/old-sports-complex" element={isLoggedIn ? <OldSportsComplex /> : <Navigate to="/" />} />
        <Route path="/new-sports-complex/table-tennis" element={isLoggedIn ? <TableTennis /> : <Navigate to="/" />} />
        <Route path="/old-sports-complex/table-tennis" element={isLoggedIn ? <TableTennis /> : <Navigate to="/" />} />
        <Route path="/new-sports-complex/badminton" element={isLoggedIn ? <Badminton /> : <Navigate to="/" />} />
        <Route path="/old-sports-complex/badminton" element={isLoggedIn ? <Badminton /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
