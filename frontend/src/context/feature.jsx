import React, { createContext, useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export const FeatureContext = createContext();

export const FeatureProvider = ({ children }) => {
    const [features, setFeatures] = useState([]);
    const TEST="test";
    const bookingTour = async (feature) => {
        try {
            const docRef = await addDoc(collection(db, 'features'), feature);
            setFeatures((prevFeatures) => [...prevFeatures, { id: docRef.id, ...feature }]);
            return docRef;
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return (
        <FeatureContext.Provider value={{ features, bookingTour, TEST }}>
            {children}
        </FeatureContext.Provider>
    );
};
