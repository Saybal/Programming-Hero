import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Root;