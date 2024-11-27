import React from 'react'
import { useParams } from 'react-router-dom'
import getTourDetails from '../components/Constant';
import TourDetail from '../components/destination/TourDetail';

export default function Details() {
  const {title} = useParams();
  const info = getTourDetails(title);
  // console.log(info);

  return (
    <TourDetail 
      description={info.description}
      heading={info.heading} 
      title={info.title} 
      locations={info.locations} 
      prices={info.prices} imageUrl={info.image}
    />
  )
}
