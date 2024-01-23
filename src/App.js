import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landing';
import Dashboard from './pages/dashboard';
import AccounValidate from './pages/account-validate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account-validate" element={<AccounValidate />} />
    </Routes>
  );
}

export default App;
