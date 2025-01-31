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
        <div className='container'>
            {
                categories.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Filter