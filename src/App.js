import React from 'react';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginPage />
    </div>
  );
}

export default App;
