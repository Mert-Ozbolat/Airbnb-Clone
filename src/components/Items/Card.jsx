import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card as BootstrapCard, Badge } from 'react-bootstrap';
import { Heart } from 'lucide-react';

const AirbnbCard = ({ item }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="shadow-sm border-0" style={{ width: '18rem', borderRadius: '12px', overflow: 'hidden' }}>

            {/* Slider */}
            <Slider {...settings}>
                {item.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Accommodation ${index}`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }} />
                    </div>
                ))}
            </Slider>

            <div style={{ padding: '15px' }}>
                <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.name}</h5>
                <h6 style={{ fontSize: '14px' }}>{item.location}</h6>
                <p style={{ fontSize: '14px', color: '#333' }}>{item.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#222' }}>{item.price}$</span>
                        <span style={{ fontSize: '12px', color: '#757575' }}> / night</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#757575' }}>★ {item.rating}</div>
                </div>
            </div>
        </div>
    );
};

export default AirbnbCard;