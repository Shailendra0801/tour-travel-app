import React from 'react'
import { useParams } from 'react-router-dom'
import getTourDetails from '../components/Constent';
import TourDetail from '../components/destination/TourDetail';

export default function Details() {
    const {title} = useParams();
    const info = getTourDetails(title);
    console.log(info);
  return (
    <TourDetail 
    description={info.description}
        title={info.heading} 
        locations={info.locations} 
        prices={info.prices} imageUrl={info.image}
    />
  )
}
