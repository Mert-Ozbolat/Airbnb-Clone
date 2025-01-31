import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getCategories from './../store/action/getCategories';
import { setSelectedCategory } from '../store/slice/categoriesSlice'

const Filter = () => {

    const dispatch = useDispatch()
    const { categories, selectedCategory } = useSelector(state => state.category)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    return (
        <div className="container mt-5">
            <div className="d-flex flex-wrap justify-content-between">
                {categories.map((item) => (
                    <div
                        key={item.id}
                        style={{ cursor: "pointer" }}
                        className={`d-flex flex-column align-items-center rounded m-1 flex-grow-1 p-2 
                            ${selectedCategory === item.name ? "bg-dark text-light" : "bg-light text-dark"}`}
                        onClick={() => dispatch(setSelectedCategory(item.name))}>
                        <img src={item.images} alt={item.name} className="mb-2" style={{ width: "30px", height: "30px" }} />
                        <span className=" fw-bold text-dark text-center">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Filter