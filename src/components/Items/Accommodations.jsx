import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getList from '../../store/action/getList';
import Loader from '../Loader';
import Card from './Card';

const Accommodations = () => {
    const dispatch = useDispatch();

    const { list, isLoading } = useSelector(state => state.listing);
    const { selectedCategory } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    const filteredHomes = selectedCategory ? list.filter(item.category === selectedCategory) : list

    return (
        <div className="container mt-5">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="row">
                    {filteredHomes && filteredHomes.length > 0 ? (
                        filteredHomes.map((item, index) => (
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
