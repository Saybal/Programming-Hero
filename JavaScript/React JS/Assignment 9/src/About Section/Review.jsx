import React from 'react';

const Review = ({review}) => {
    return (
        <div>
            <div className='flex gap-2'>
                <h1>{review.user}</h1>
                <p>{review.rating}</p>
            </div>

            <div>
                <p>{review.comment}</p>
            </div>
        </div>
    );
};

export default Review