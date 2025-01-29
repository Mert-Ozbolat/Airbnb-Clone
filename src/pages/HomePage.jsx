import React from 'react'
import Header from '../components/Header'
import Accommodations from '../components/Items/Accommodations'
import SearchBar from '../components/SearchBar'

const HomePage = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <Accommodations />
        </div>
    )
}

export default HomePage