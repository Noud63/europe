import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Wrapper from './components/Wrapper'
import Readmore from './components/Readmore'

function App() {
  return (
      <Router >
         <Routes>
          <Route path='/' element={<Wrapper />} />
          <Route path='/readmore' element={<Readmore />} />
        </Routes>
      </Router>
  );
}

export default App;
