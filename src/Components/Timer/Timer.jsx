import React, { useEffect, useState } from 'react';

const Timer = ({ duration }) => {
    
    let x = parseInt(duration);
    let timeLeft = x * 24 * 60 * 60 * 1000;
    
    const [time, settime] = useState(timeLeft);

    useEffect(() => {
        setTimeout(() => {
            settime(time - 1000);
         }, 1000);
    }, [time])

    const formatTIme = (time) => {

        if(time <= 0) return "0 : 0 : 0 : 0";
        let total_Seconds = Math.floor(time / 1000);
        let total_minutes = Math.floor(total_Seconds / 60);
        let total_hours = Math.floor(total_minutes / 60);
        let total_days = Math.floor(total_hours / 24);

        let seconds = total_Seconds % 60;
        let minutes = total_minutes % 60;
        let hours = total_hours % 24;

        return `${total_days} : ${hours} : ${minutes} : ${seconds}`;
    }
    return (
        <div>
            {formatTIme(time)}
            {time <= 0 ? <div className='text-red-500'>Time Up</div> : ""}
        </div>
    );
};

export default Timer;