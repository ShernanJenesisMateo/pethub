import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from '../src/components/LandingPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pethub" Component={LandingPage} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;