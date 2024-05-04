import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignUp from './LoginSignUp';
import MainDashboard from './MainDashboard';
import Settings from './Settings';
import ForgotPassword from './ForgotPassword'; // Change as needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
