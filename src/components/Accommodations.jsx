import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getList from '../store/action/getList'

const Accommodations = () => {

    const dispatch = useDispatch()
    const {list} = useSelector(state => state.listing)

    useEffect(() => {
        dispatch(getList())
    }, [dispatch])

    console.log('Veriler:', list)

  return (
    <div>Accommodations</div>
  )
}

export default Accommodations