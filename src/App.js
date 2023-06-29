import "./App.css";
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";


function App() {
  const [isLogin,setisLogin]=useState(false); 
  return <div className="w-screen min-h-screen bg-richblack-900 mx-auto">
  <Navbar isLogin={isLogin} setisLogin={setisLogin}/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/login' element={<Login isLogin={isLogin} setisLogin={setisLogin}/>}/>
    <Route path='/signup' element={<Signup isLogin={isLogin} setisLogin={setisLogin}/>} />
    <Route path="/dashboard" element={
      <PrivateRoute isLogin={isLogin}>
        <Dashboard/>
      </PrivateRoute>
    }/>
  </Routes>
  
  </div>;
}

export default App;
