import React from 'react';
import './ReviewDatails.css'

const ReviewDatails = ({info}) => {
  
    return (
        <div >
            <div  className='shadow-sm' >
            <h4>{info.name}</h4>
            <p><small> Rating: {info.rating}</small></p>
            <p> Review:{info.reviews}</p>
        </div>
        </div>
    );
};

export default ReviewDatails;