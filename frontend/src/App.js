import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginSignUp from './LoginSignUp';
import MainDashboard from './MainDashboard';
import Settings from './Settings';
import PatientSearch from './PatientSearch';
//import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/patients" element={<PatientSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;