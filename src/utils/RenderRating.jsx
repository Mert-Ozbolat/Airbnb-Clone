import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";

const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) { // 5 yıldız üzerinden kontrol
        if (i < rating) {
            stars.push(<FaStar key={i} />);
        } else {
            stars.push(<FaRegStar key={i} />);
        }
    }
    return stars;
};

export default renderStars