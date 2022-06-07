import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Registration from "./components/registration/Registration";
import Emergency from "./components/emergency/Emergency";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home2 from "./components/home2/Home2";
import About from './components/about/About'
import Service from './components/service/Service'
import Contact from "./components/contact/Contact";
import Land from "./components/land/Land";
import Show from "./components/show/Show"
import Admin from "./components/ADMIN/Admin";
import DAdmins from "./components/demo_admin/Admin"
import AdminTrash from './components/ADMIN/outlet/trash/AdminTrash'
import AdminService from './components/ADMIN/outlet/AdminService/AdminService'
import AdminUser from "./components/ADMIN/outlet/AdminUser/AdminUser";
import Default from "./components/ADMIN/outlet/Default/Default";
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Emergency" element={<Emergency/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path='Home2' element={<Home2/>}>
          <Route path="" element={<Land/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Service' element={<Service/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Registration" element={<Registration/>} />
        </Route>
        <Route path="/Show"  element={<Show />}/>
        <Route path="/dadmin"  element={<DAdmins/>}/>
        <Route path='admin' element={<Admin/>}>
          <Route path="user" element={<AdminUser/>}/>
          <Route path='trash' element={<AdminTrash/>}/>
          <Route path='Service' element={<AdminService/>}/>
          <Route path="" element={<Default/>}/>
        </Route>
      </Routes>
    </Router>
     
  )}
export default App;
