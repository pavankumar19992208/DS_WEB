import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import P2pHeader from './components/P2pHeader/P2pHeader';
import WelcomeBoard from './components/WelcomeBoard/WelcomeBoard'
import Signup from './components/P2pHeader/Signup'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<WelcomeBoard  />} />
          <Route path="/p2pheader" element={<P2pHeader />} />
          <Route  path='/Signup' element={<Signup/>} />
        </Routes>
    </Router>
    
  );
}

export default App;