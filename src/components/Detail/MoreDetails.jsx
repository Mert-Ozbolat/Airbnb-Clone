import React from 'react'
import renderStars from '../../utils/RenderRating';
import { GrLocationPin } from 'react-icons/gr';

const MoreDetails = ({ item }) => {
    const rating = item.rating;
    return (
        <div>
            <div className='d-flex flex-row justify-content-between'>
                <h5 className="text-gray-500 mt-1"><GrLocationPin />{item.location}</h5>
                <div className="d-flex flex-col items-center gap-2 mt-2 ">
                    <span className="text-xl font-semibold">{item.rating}</span>
                    <span>{renderStars(item.rating)}</span>
                    <span className="text-gray-500">{item.reviews}</span>
                </div>
            </div>
            <p className="mt-4 text-gray-700">{item.description}</p>
        </div>
    )
}

export default MoreDetails