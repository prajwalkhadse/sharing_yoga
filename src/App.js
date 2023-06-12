
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import SignIn from './components/Login-Register/SignIn';
import Register from './components/Login-Register/Register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/sign" element={<SignIn/>} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
