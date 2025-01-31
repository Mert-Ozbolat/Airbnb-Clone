import React from 'react'
import Header from '../components/Header'
import Accommodations from '../components/Items/Accommodations'
import SearchBar from '../components/SearchBar'
import Filter from '../components/filter'


const HomePage = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <Filter />
            <Accommodations />
        </div>
    )
}

export default HomePage