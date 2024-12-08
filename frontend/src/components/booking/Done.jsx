import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Done() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [history]);

    return (
        <div className='w-screen h-screen FLEX bg-gray-400'>
            <div className='bg-white FLEX flex-col p-10 rounded-md'>
                <img src="/image/doneAnime.gif" alt="done" className='w-1/4' />
                <h1>Booking Confirmed!</h1>
                <p>Your booking has been successfully completed.</p>
            </div>
        </div>
    );
}