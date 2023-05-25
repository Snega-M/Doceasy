import React from "react";
import {NavDropdown, Navbar, Container, Nav} from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./pages/Contact";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import AdminPanel from "./pages/AdminPanel";
import AddDoctorComponent from "./AddDoctorComponent";
import AddAppointmentComponent from "./AddAppointmentComponent";
import { ListDoctorComponent } from "./ListDoctorComponent";
import AppointmentTab from "./pages/AppointmentTab";

class NavigationBar extends React.Component{
        render(){
            return(
                <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />}/>
          <Route path="contact" element={<AdminPanel/>} />
          <Route path="add-doctor" element={<AddDoctorComponent/>} />
          <Route path="edit-doctor/:id" element={<AddDoctorComponent/>} />
          <Route path ="list-doctor" element={<ListDoctorComponent/>} />
          <Route path="list-appointment" element={<AppointmentTab/>} />
          <Route path="add-appointment/:id" element={<AddAppointmentComponent/>} />
          
          </Route>
       
      </Routes>
    </BrowserRouter>

    

          );
        }
}
export default NavigationBar