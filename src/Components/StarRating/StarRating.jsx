import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

export default function StarRating({ rating }) {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index}>
            {index < rating ? <AiFillStar /> : <AiOutlineStar />}
        </span>
    ));

return (
    <div className='star'>
        {stars}
    </div>
)
}
