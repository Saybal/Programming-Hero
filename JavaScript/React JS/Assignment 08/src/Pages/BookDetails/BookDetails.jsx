import React, { useEffect, useState } from 'react';
import { getStoredlawyer } from '../../Util/addToDB';
import AppoinmentCard from './AppoinmentCard';
import Empty from './Empty';
import { removeLawyer } from '../Lawyer_list/removeLawyer';
import { toast } from 'react-toastify';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6F91", "#845EC2", "#00C9A7", "#FF9671", "#FFC75F", "#2C73D2", "#008E9B", "#B39CD0"];

const BookDetails = () => {

    const [data, setData] = useState([]);
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        document.title = "Bookig Details";
    }, []);
    
    useEffect(() => {
        fetch("lawyerlist.json").then(res => res.json()).then(data=>setData(data));
    }, [])

    useEffect(() => {
        const storedLawyerData = getStoredlawyer();
        // console.log(storedLawyerData);
        const Booked_Lawyers = data.filter(lawyer => storedLawyerData.includes(lawyer.id))
        setAppointment(Booked_Lawyers)
    }, [data])
    
    const handleCancel = (id) => {
        removeLawyer(id);
        setAppointment(prev => prev.filter(lawyer => lawyer.id !== id));
        toast.error("Appointment Cancelled");
    };
    
    return (
        <div className='max-w-6xl mx-auto'>
            {appointment.length > 0 && (
                <div className='mt-10 p-4 border rounded-lg shadow-sm bg-white'>
                    <h2 className='text-2xl font-bold mb-4 text-center'>Appointment Summary (Fee Comparison)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={appointment}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="money">
                            {appointment.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
            <div className={`w-full mt-[4rem] text-center ${appointment.length<1 ? "hidden" : "visible"}`}>
                <h1 className='font-bold text-4xl'>My Today Appointments</h1>
                <p className='text-base mt-2'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>

            </div>
            {appointment.length<1 ? <Empty/> : 
            appointment.map((booking) => <AppoinmentCard key={booking.id} booking={booking} handleCancel={handleCancel} />)}
        </div>
    );
};

export default BookDetails;