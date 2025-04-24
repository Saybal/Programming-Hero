import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import LawyerList from '../../Pages/Lawyer_list/LawyerList';
// import { useLoaderData } from 'react-router';
import Services from '../Services/Services';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("lawyerlist.json").then(res => res.json()).then(data=>setData(data));
    },[])
    
    useEffect(() => {
        document.title = "Law.BD";
    }, []);

    // const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner />
            <LawyerList data={data} />
            <Services/>
        </div>
    );
};

export default Home;