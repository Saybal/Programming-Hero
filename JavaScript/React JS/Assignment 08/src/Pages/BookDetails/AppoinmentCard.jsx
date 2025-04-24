import React from 'react';

const AppoinmentCard = ({booking, handleCancel}) => {
    return (
        <div className='max-w-6xl mx-auto my-[4rem] border border-[#C4C4C499] p-[2rem] shadow-sm rounded-3xl'>
            <div className='flex justify-between items-center pb-[1rem] mb-[1rem] border-b-1 border-dashed border-[#0F0F0F33]'>
                <div>
                    <h1 className='font-bold text-xl'>{booking.name}</h1>
                    <p className='font-medium text-lg text-black/60'>{booking.specialization}</p>
                </div>
                <p className='font-medium text-lg text-black/60'>Appointment Fee: {booking.money} Taka</p>
            </div>

            <button onClick={() => handleCancel(booking.id)} className="btn btn-outline btn-error font-semibold text-xl rounded-full w-full">Cancel Appointment</button>
        </div>
    );
};

export default AppoinmentCard;