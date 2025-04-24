import React from 'react';

const Footer = () => {
    return (
        <div className='w-screen mt-[5rem]'>
            <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10">
            <div className='flex gap-4'>
               <img src="logo-footer.png" alt="" />   
               <h1 className='text-[2rem] text-white font-bold'>Law.BD</h1>     
            </div>
  <nav className="grid grid-flow-col gap-4 text-lg ">
    <a className="link link-hover text-white">About us</a>
    <a className="link link-hover text-white">Contact</a>
    <a className="link link-hover text-white">Jobs</a>
    <a className="link link-hover text-white">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-8 text-white">
        <a href="https://www.linkedin.com/in/saybal-roy-56a250361/" target="_blank" rel="noopener noreferrer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-white"
        >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                    2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 
                    19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75 
                    s.784-1.75 1.75-1.75 1.75.785 
                    1.75 1.75-.784 1.75-1.75 
                    1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.866-3.062-1.868 
                    0-2.154 1.46-2.154 2.968v5.698h-3v-10h2.881v1.367h.041c.401-.761 
                    1.381-1.562 2.844-1.562 3.043 0 3.605 2.002 
                    3.605 4.604v5.591z" />
        </svg>
        </a>
               
      <a href='https://youtube.com/@saybalroy3975?si=XgmH83t5qFh-RSgn'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a href='https://www.facebook.com/saybal.roy/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;