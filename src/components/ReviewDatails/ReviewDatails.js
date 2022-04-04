import React from 'react';

const ReviewDatails = ({info}) => {
  
    return (
        <div >
            <h2>Customer Name:{info.name}</h2>
            <p>{info.reviews}</p>
        </div>
    );
};

export default ReviewDatails;