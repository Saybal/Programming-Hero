import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import lawyer from '../../assets/images/success-doctor.png';
import success from '../../assets/images/success-review.png';
import hammer from '../../assets/images/success-patients.png';
import stuffs from '../../assets/images/success-staffs.png';

const Services = () => {
  const { ref, inView } = useInView({
      triggerOnce: false, // Only run once when it comes into view
    threshold: 0.5     // Trigger when 50% visible
  });

  return (
    <div className='mt-[6.5rem] w-full flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>We Provide Best Law Services</h1>
      <p className='text-lg text-black/60 my-3'>
        Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.
      </p>

      <div ref={ref} className='grid grid-cols-4 gap-10'>
        <div className='py-[1.5rem] px-[3rem] bg-[#F0F2F2] rounded-3xl w-[16rem] h-[14rem]'>
          <img className='w-[64px] h-[64px]' src={lawyer} alt="" />
          <h1 className="text-4xl font-bold my-4">
            {inView && <CountUp key={inView? 'visible' : 'hidden'} start={199} end={500} duration={60} />}+
          </h1>
          <p className="mt-2 text-black/70 text-xl">Total Lawyer</p>
        </div>
        <div className='py-[1.5rem] px-[3rem] bg-[#F0F2F2] rounded-3xl w-[16rem] h-[14rem]'>
          <img className='w-[64px] h-[64px]' src={success} alt="" />
          <h1 className="text-4xl font-bold my-4">
            {inView && <CountUp key={inView? 'visible' : 'hidden'} start={467} end={1000} duration={60} />}+
          </h1>
          <p className="mt-2 text-black/70 text-xl">Total Reviews</p>
        </div>
        <div className='py-[1.5rem] px-[3rem] bg-[#F0F2F2] rounded-3xl w-[16rem] h-[14rem]'>
          <img className='w-[64px] h-[64px]' src={hammer} alt="" />
          <h1 className="text-4xl font-bold my-4">
            {inView && <CountUp key={inView? 'visible' : 'hidden'} start={1900} end={3000} duration={60} />}+
          </h1>
          <p className="mt-2 text-black/70 text-xl">Cases Initiated</p>
        </div>
        <div className='py-[1.5rem] px-[3rem] bg-[#F0F2F2] rounded-3xl w-[16rem] h-[14rem]'>
          <img className='w-[64px] h-[64px]' src={stuffs} alt="" />
          <h1 className="text-4xl font-bold my-4">
            {inView && <CountUp key={inView? 'visible' : 'hidden'} start={300} end={700} duration={60} />}+
          </h1>
          <p className="mt-2 text-black/70 text-xl">Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
