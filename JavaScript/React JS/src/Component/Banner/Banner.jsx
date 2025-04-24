import React from 'react';
// import background from '../../assets/images/banner-img-1.png';

const Banner = () => {
    return (
        <div className="h-[500px] w-full bg-[url('https://i.ibb.co.com/Kz0z4m4p/banner-img-1.png')] bg-cover bg-no-repeat bg-center rounded-4xl max-w-7xl mx-auto">
            <div className='flex flex-col items-center justify-center bg-black/30 rounded-4xl w-full h-full py-[5.375rem] px-[8.5rem] text-center'>
            <h1 className='text-5xl font-bold text-white my-[1rem]'>
                It avoids subjective claims or<br /> exaggeration that might raise red <br /> flags legally
            </h1>
            <p className='text-white/70 text-base font-medium'>
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            </div>
        </div>
    );
};

export default Banner;