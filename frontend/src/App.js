import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginSignUp from './LoginSignUp';
import MainDashboard from './MainDashboard';
import Settings from './Settings';
import PatientSearch from './PatientSearch';
import Patient1 from './Patient1';
import ForgotPassword from './ForgotPassword'; // Change as needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/patients" element={<PatientSearch />} />
        <Route path="/patient1" element={<Patient1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
