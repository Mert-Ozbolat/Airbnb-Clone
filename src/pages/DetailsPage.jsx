import React from 'react'
import { BiShare } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import Header from '../components/Header';
import ImageGallery from '../components/Detail/ImageGallery';
import MoreDetails from '../components/Detail/MoreDetails';
import Reservation from '../components/Detail/Reservation';

const DetailsPage = () => {

    const location = useLocation();
    const { item } = location.state || {}



    return (
        <div className='container'>
            <Header />
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <h3>{item.name}</h3>
                <div>
                    <BiShare />
                    <FaRegHeart />
                </div>
            </div>

            <div>
                <ImageGallery images={item.images} />
            </div>


            <div className='info'>
                <div className=''><MoreDetails item={item} /></div>


                <div>
                    <Reservation item={item} />
                </div>
            </div>


        </div>
    )
}

export default DetailsPage