// import './App.css';
import '../src/widget/widget.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Click1 from './widget/click1';



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Click1 />} />
          {/* <Route path="/image2" element={<Click2 />} />
          <Route path="/image3" element={<Click3 />} />
          <Route path="/image4" element={<Click4 />} />
          <Route path="/image8" element={<Click5 />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;


