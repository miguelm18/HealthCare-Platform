import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginSignUp from './LoginSignUp';
import MainDashboard from './MainDashboard';
//import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/dashboard" element={<MainDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;