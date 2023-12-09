import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './Navigation'
import './Main.css';
const Main = () => {
  return (
    <Router>
      <div className="background">
      <Routes>
        <Route path="/" element={<Navigation />} />
        {/* Other routes go here */}
      </Routes>
      </div>
    </Router>
  )
}

export default Main;
