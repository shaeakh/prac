import './App.css';
import LoginPage from './components/pages/Loginpage/Loginpage';
import Regpage from './components/pages/RegPage/Regpage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<Regpage />} />
        {/* <Route path="/Profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
