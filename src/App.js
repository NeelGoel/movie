import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
const Login  = React.lazy(() => import('./components/login/login'));
const Dashboard  = React.lazy(() => import('./components/Dashboard/dashboard'));


function App() {
  return (
    <Router>
       <Suspense fallback={<div>Loading...</div>}>
      <Routes>   
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Dashboard />}/>
        <Route path='/*' element={<Navigate to='/login'/>}/>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
