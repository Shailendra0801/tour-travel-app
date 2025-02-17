import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import getTourDetails from '../Constant';
import { FeatureContext } from '../../context/feature';
import { AuthContext } from '../../context/AuthContext';
import "./booking.css";

export default function Booking() {
    const { title } = useParams();
    const { prices } = getTourDetails(title);
    const { bookingTour } = useContext(FeatureContext);
    const { user, sendMailToCustomer } = useContext(AuthContext);
    const navigate = useNavigate();

    const [journeyDate, setJourneyDate] = useState('');
    const [responseId, setResponseId] = useState();
    const [numMembers, setNumMembers] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [paymentBy, setPaymentBy] = useState('');
    const [carType, setcarType] = useState(Object.keys(prices)[0]);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, []);

    const location = useLocation();

    useEffect(() => {
        setIsFormValid(journeyDate && numMembers && name && carType && phone);
    }, [journeyDate, numMembers, name, carType, phone]);

    const handleSubmit = (journeyDate, carType, numMembers, name, amount, phone, razorpay_payment_id) => {
        // Handle booking logic here
        bookingTour({
            data : journeyDate,
            carType,
            numMembers,
            name,
            amount,
            phone,
            razorpay_payment_id
        })
        .then(res => {
            sendMailToCustomer({
                date: journeyDate,
                carType,
                numMembers,
                name,
                paymentDone: amount,
                paymentId: razorpay_payment_id,
                orderID: res.id,
                phone
            });
        })
        .catch(error => {
            console.error("Error booking tour: ", error);
        });
    };

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");

            script.src = src;

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    const createRazorpayOrder = async (amount) => {
        const amountInDigits = parseInt(amount.replace(/[^0-9]/g, ''), 10);
        setPaymentBy(amountInDigits);   

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/orders`, {
                amount: amountInDigits * 100,
                currency: "INR"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                maxBodyLength: Infinity
            });

            if (response.status === 200) {
                handleRazorpayScreen(amountInDigits);
            }
        
        } catch (error) {
            console.log("error at", error);
        }
    };

    const handleRazorpayScreen = async (amount) => {
        const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Some error at razorpay screen loading");
            return;
        }

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount: amount * 100,
            currency: 'INR',
            name: "Sunraj Taxi Services",
            description: "Payment to Sunraj Taxi Services",
            image: "https://kydeedknficgzzfvfiiy.supabase.co/storage/v1/object/public/CODEBLOCK/public/logo.jpeg",
            
            handler: function (response) {
                setResponseId(response.razorpay_payment_id);
                
                handleSubmit(
                    journeyDate,
                    carType,
                    numMembers,
                    name,
                    amount,
                    phone,
                    response.razorpay_payment_id
                );

                navigate('/done');
            },
            prefill: {
                name: "Sunraj Taxi Services",
                email: "sunrajtoursandtravels@gmail.com"
            },
            theme: {
                color: "#F4C430"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };


    return (
        <div className='FLEX w-screen h-screen'>
            <form onSubmit={handleSubmit}>
                <FormField label="Name:" type="text" value={name} onChange={setName} required />
                <FormField label="Journey Date:" type="date" value={journeyDate} onChange={setJourneyDate} required />
                <FormField label="Number of Members:" type="number" value={numMembers} onChange={setNumMembers} required />
                <FormField label="Enter contact No. " type="tel" value={phone} onChange={setPhone} required />

                <FormField label="Car Type:" type="select" value={carType} onChange={setcarType} options={Object.keys(prices)} required />
                {/* Redeploy */}
                <label className=' text-blue-700 text-xl mb-4'>Selected Price: {parseFloat(prices[carType].replace(/[^0-9.]/g, '')) / 4}</label>
                <p>(You only need to pay 25% while booking, rest after ride. For more information contact 9012765558)</p>
                <div className='FLEX mb-4'>
                    <input type="checkbox" required className='size-5 mb-0 mr-3' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                    <span> I agree to the <Link to="/privacy" className='text-blue-600'>privacy policy</Link></span>
                </div>

                <button type="button" onClick={() => createRazorpayOrder((parseFloat(prices[carType].replace(/[^0-9.]/g, '')) / 4).toString())} className='paymentButton mb-4' disabled={!isFormValid || !isChecked}>Pay</button>
            </form>
        </div>
    );
}

function FormField({ label, type, value, onChange, options, required }) {
    return (
        <div>
            <label>{label}</label>
            {type === 'select' ? (
                <select value={value} onChange={(e) => onChange(e.target.value)} required={required}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                />
            )}
        </div>
    );
}
