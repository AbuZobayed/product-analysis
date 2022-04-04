import React from 'react';
import ReviewDatails from '../ReviewDatails/ReviewDatails';
import UseData from '../UseData/UseData';

const Reviews = () => {
    const [data ,setData] = UseData()
    return (
        <div>
               {
                   data.map(info => <ReviewDatails key={info.id} info={info}></ReviewDatails>)
               }
        </div>
    );
};

export default Reviews;