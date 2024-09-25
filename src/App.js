import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NewSportsComplex from './components/NewSportsComplex';
import OldSportsComplex from './components/OldSportsComplex';
import TableTennis from './components/TableTennis';
import Badminton from './components/Badminton';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/" element={<Login />} />
        
        {/* Other routes without login check */}
        <Route path="/home" element={<Home />} />
        <Route path="/new-sports-complex" element={<NewSportsComplex />} />
        <Route path="/old-sports-complex" element={<OldSportsComplex />} />
        <Route path="/new-sports-complex/table-tennis" element={<TableTennis />} />
        <Route path="/old-sports-complex/table-tennis" element={<TableTennis />} />
        <Route path="/new-sports-complex/badminton" element={<Badminton />} />
        <Route path="/old-sports-complex/badminton" element={<Badminton />} />

        {/* Catch-all route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
