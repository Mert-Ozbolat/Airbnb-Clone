import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getCategories from './../store/action/getCategories';

const Filter = () => {

    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    return (
        <div className="container mt-5">
            <div className="d-flex flex-wrap justify-content-between">
                {categories.map((item) => (
                    <div key={item.id} className="d-flex flex-column align-items-center rounded m-1 flex-grow-1">
                        <img src={item.images} alt={item.name} className="mb-2" style={{ width: "30px", height: "30px" }} />
                        <span className=" fw-bold text-dark text-center">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Filter