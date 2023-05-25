import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AppointmentService from '../services/AppointmentService'


const AppointmentTab = () => {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {

        getAllAppointments();
    }, [])

    const getAllAppointments = () => {
        AppointmentService.getAllAppointments().then((response) => {
            setAppointments(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }


    return (
        <div className = "container">
            <h2 className = "text-center"> List Appointments </h2>
            <Link to = "/add-appointment" className = "btn btn-primary mb-2" > Add Appointment </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Appointment Id </th>
                    <th> Doctor Code</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        appointments.map(
                            appointment =>
                            <tr key = {appointment.id}>
                                
                               
                                <td > {appointment.id} </td>
                                <td> {appointment.dcode} </td>
                                <td> {appointment.price} </td>

                                <td>{appointment.quantity}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/add-appointment/${appointment.dcode}`} >Book</Link>
                                    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AppointmentTab