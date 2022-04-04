import React from 'react';
import ReviewDatails from '../ReviewDatails/ReviewDatails';
import UseData from '../UseData/UseData';

const Reviews = () => {
    const [data ,setData] = UseData()
    return (
        <div className='container mt-5'>
            <div className='row row-cols-md-3'>
               {
                   data.map(info => <ReviewDatails key={info.id} info={info}></ReviewDatails>)
               }
        </div>
        </div>
    );
};

export default Reviews;