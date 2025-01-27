import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getList from '../../store/action/getList'; // API verilerini alacak action
import Loader from '../Loader';
import Card from './Card'; // Kart bileşenini import ediyoruz

const Accommodations = () => {
    const dispatch = useDispatch();
    const { list, isLoading } = useSelector(state => state.listing);

    useEffect(() => {
        dispatch(getList());  // getList action'ını tetikleyerek veriyi alıyoruz
    }, [dispatch]);

    console.log('Veriler:', list);

    return (
        <div className="container mt-5">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="row">
                    {list && list.length > 0 ? (
                        list.map((item, index) => (
                            <div key={index} className="col-md-2 mb-4 mx-5 container">
                                <Card item={item} />
                            </div>
                        ))
                    ) : (
                        <div>No accommodations available.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Accommodations;
