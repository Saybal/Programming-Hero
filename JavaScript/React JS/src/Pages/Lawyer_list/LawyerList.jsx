import React, { useState } from 'react';
import LawyerCard from './LawyerCard';

const LawyerList = ({ data }) => {

    // const lawyerdata = use(data);
    
    const [hidedetails, setDetails] = useState(false);

    const handleDetails = () => {
        setDetails(!hidedetails);
    }
    
    return (
        <div className='max-w-6xl mx-auto flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center mt-[6rem]'>
                <h1 className='font-bold text-4xl mb-[1rem]'>
                    Our Best Lawyers
                </h1>
                <p className='text-black/60 font-md text-base text-center'>
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-6 w-full ml-6'>
                {
                    !hidedetails ?
                        data.slice(0, 6).map(lawyer => <LawyerCard key={lawyer.id} lawyer={lawyer} />)
                        : data.map(lawyer => <LawyerCard key={lawyer.id} lawyer={lawyer} />)
                }
            </div>
            <button onClick={handleDetails} className='btn btn-success mt-8 text-white font-bold'>
                    {hidedetails ? 'Hide Details' : 'Show Details'}
            </button>
        </div>
    );
};

export default LawyerList;