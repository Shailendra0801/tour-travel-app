import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import getTourDetails from '../Constant';
import { FeatureContext } from '../../context/feature';

export default function Booking() {
    const { title } = useParams();
    const { prices } = getTourDetails(title);
    const { bookingTour } = useContext(FeatureContext);

    const [journeyDate, setJourneyDate] = useState('');
    const [numMembers, setNumMembers] = useState('');
    const [name, setName] = useState('');
    const [paymentBy, setPaymentBy] = useState('');
    const [planeType, setPlaneType] = useState(Object.keys(prices)[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Handle booking logic here
        await bookingTour({
            journeyDate,
            planeType,
            numMembers,
            name,
            paymentBy,
        });
        alert('Tour booked successfully!');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormField label="Name:" type="text" value={name} onChange={setName} required />
                <FormField label="Journey Date:" type="date" value={journeyDate} onChange={setJourneyDate} required />
                <FormField label="Type of Plane:" type="select" value={planeType} onChange={setPlaneType} options={Object.keys(prices)} required />
                <label>Selected Price: {prices[planeType]}</label>

                <FormField label="Number of Members:" type="number" value={numMembers} onChange={setNumMembers} required />
                <FormField label="Payment By:" type="text" value={paymentBy} onChange={setPaymentBy} required />
                <button type="submit">Book Tour</button>
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
