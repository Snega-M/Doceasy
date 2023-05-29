import React from "react";
import {NavDropdown, Navbar, Container, Nav} from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./pages/Contact";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import AddDoctorComponent from "./AddDoctorComponent";
import AdminPanel from "./pages/AdminPanel";
import AddAppointmentComponent from "./AddAppointmentComponent";
import AppointmentTab from "./pages/AppointmentTab";



class NavigationBar extends React.Component{
        render(){
            return(
                <BrowserRouter>
      <Routes>
       <Route path="/" element={<div><Layout /></div>}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="doctors" element={<Doctors />}/>
          <Route path="login" element={<Login/>}/>
          <Route path="add-doctor" element={<AddDoctorComponent/>} />
          <Route path="edit-doctor/:id" element={<AddDoctorComponent/>} />
          <Route path="admin-login" element={<AdminPanel/>}/>
          <Route path="list-appointment" element={<AppointmentTab/>} />
          <Route path="add-appointment/:id" element={<AddAppointmentComponent/>} />
          


        </Route>
       
      </Routes>
    </BrowserRouter>

    

          );
        }
}
export default NavigationBar