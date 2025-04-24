import {React, Suspense, useEffect } from 'react';
import { useParams } from 'react-router';
import { lawyerResource } from './LawyerResource';
import { FaRegRegistered } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { addToStoreDB } from '../../Util/addToDB';
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';

const LawyerdetailsContainer = () => {

    const handleSaveLawyer = (ID) => {

        addToStoreDB(ID);
        toast.success("Your appointment has been saved successfully. ")
    }

    useEffect(() => {
        document.title = "Lawer Details";
    }, []);

    const { id } = useParams();
    const lawyerid = parseInt(id);

    const data = lawyerResource.read();

    const lawyer = data.find(l => l.id === lawyerid)
    return (
    <div className='text-center mt-10'>
      <div className="bg-[#1414141A] p-[4.5rem] rounded-3xl">
        <h1 className="text-4xl font-bold mb-3">Lawyer’s Profile Details</h1>
        <p className="text-base">Our lawyer brings extensive experience in civil, criminal, and corporate law, providing expert legal counsel tailored to each client’s unique needs. With a Juris Doctor (JD) degree and bar membership in multiple jurisdictions, they combine academic excellence with practical expertise. Committed to a client-centered approach, they prioritize clear communication, strategic advocacy, and achieving the best possible outcomes for every case.</p>
      </div> 
            
      <div className="w-full flex my-[2rem] gap-6 items-center p-4 border border-[#C4C4C499] rounded-xl shadow-sm space-x-4 bg-white">
          {/* Profile Placeholder */}
          <img src={lawyer.image} className="w-[19.25rem] h-[19.25rem] rounded-md" />
    
          {/* Info Section */}
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-base bg-green-100 text-green-800 px-3 py-1 rounded-full">
                {lawyer.availability}
              </span>
              <span className="text-base bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {lawyer.experience}
              </span>
            </div>
            
            <h2 className="text-[2rem] font-bold text-left my-2">{lawyer.name}</h2>
                    
            <div className="flex gap-6 my-3">
                <p className="text-lg text-gray-600 btn btn-dash rounded-full">{lawyer.specialization}</p>
                <p className="text-lg text-gray-500 flex gap-1 items-center btn btn-dash rounded-full">
                <span className="mr-1"><FaRegRegistered className="mt-0.5"/></span> License No: {lawyer.license_no}
                </p>       
            </div>
                    
            <div className="text-left">
                <span className="text-black/70 text-lg font-semibold">Avaibility</span> {lawyer.Available_Time.map((day)=><span className="bg-[#FFA0001A] text-[#FFA000] px-3 py-0.5 rounded-full">
                {day}
                </span>)} 

                <p className="text-base font-bold mt-3">Consultation Fee: <span className="text-[#0EA106]"> Taka: {lawyer.money}</span></p>          
            </div>
                    
                
          </div>
      </div>
            
      <div className="w-full rounded-3xl p-[2rem] border shadow-sm border-[#C4C4C499]">
        <div className="font-bold py-[1rem] text-3xl w-full text-center border-b-1 border-dashed border-[#14141433]">Book an Appointment</div>
        <div className="w-full flex justify-between py-[1rem] border-b-1 border-[#14141433] mb-[1rem]">
            <p className="font-bold text-lg">Avaibility</p> 
            <span className="text-base bg-green-100 text-green-800 px-3 py-1 rounded-full">
                Lawyer  Available Today
            </span>         
        </div> 

        <div>
        <p className="bg-[#FFA0001A] text-[#FFA000] text-base px-3 py-2 rounded-full flex gap-2 items-center"> <span className="text-lg"><IoIosInformationCircleOutline /></span>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>        
        </div>

        <div className="mt-[1rem] p-[1.5rem]">
           <NavLink to='/booking'>
            <button onClick={() => handleSaveLawyer(lawyer.id)} className="btn btn-success w-full rounded-full text-xl text-white font-bold">Book Appointment Now</button>          
           </NavLink>
        </div>
      </div>            
    </div>
    );
};

const Lawyerdetails = () => {
    return (
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center items-center">
            <Suspense fallback={<div><span className="loading loading-bars loading-xl"></span></div>}>
            <LawyerdetailsContainer />
            </Suspense>
        </div>
    );
};

export default Lawyerdetails;