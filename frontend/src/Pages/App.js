import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignUp from './LoginSignUp'; // Importing the component for login/signup
import MainDashboard from './MainDashboard'; // Importing the component for the main dashboard
import Settings from './Settings'; // Importing the component for settings
import ForgotPassword from './ForgotPassword'; // Importing the component for forgot password
import AddDeletePatient from './AddDeletePatient'; // Importing the component for adding/deleting patients

// App component containing the routing setup
function App() {
  return (
    // Using BrowserRouter to enable routing
    <BrowserRouter>
      {/* Defining routes */}
      <Routes>
        {/* Route for the login/signup page */}
        <Route path="/" element={<LoginSignUp />} />
        {/* Route for the forgot password page */}
        <Route path="/Forgot" element={<ForgotPassword />} />
        {/* Route for the main dashboard page */}
        <Route path="/dashboard" element={<MainDashboard />} />
        {/* Route for the settings page */}
        <Route path="/settings" element={<Settings />} />
        {/* Route for adding/deleting patients page */}
        <Route path="/AddDeletePatient" element={<AddDeletePatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
