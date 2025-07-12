import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Import pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh' }}>
        <Routes>
          {/* Public website routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          
          {/* Redirect to main app for admin access */}
          <Route path="/app" element={<RedirectToApp />} />
          <Route path="/admin" element={<RedirectToApp />} />
          <Route path="/login" element={<RedirectToApp />} />
        </Routes>
      </Box>
    </Router>
  );
}

// Component to redirect to main app
const RedirectToApp: React.FC = () => {
  React.useEffect(() => {
    // Redirect to your main app domain
    window.location.href = 'https://app.gokhbi.com';
  }, []);

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      Redirecting to GokhBI App...
    </Box>
  );
};

export default App;
