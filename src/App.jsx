import React from 'react';
import Navbar from './navbar/navbar';
import Create from './page/create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Read from './page/read';
import EditUser from './page/editUser';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/edit/:id' element={<EditUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
