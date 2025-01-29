import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

const SearchBar = () => {

    const dispatch = useDispatch()



    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center justify-content-between flex-wrap w-75 p-2 shadow-lg bg-body-tertiary rounded-pill">


                    <div className="d-flex flex-column border-2 border-end px-2 py-1 hover-effect flex-fill">
                        <span className="small">Yer</span>
                        <input type="search" placeholder="Gidilecek Yerleri Arayın" className="border-0 bg-transparent form-control-sm" />
                    </div>


                    <div className="d-flex flex-column border-2 border-end px-2 py-1 hover-effect flex-fill">
                        <span className="small">Giriş</span>
                        <input type="date" placeholder="Tarih Seç" className="border-0 bg-transparent form-control-sm" />
                    </div>


                    <div className="d-flex flex-column  border-2 border-end px-2 py-1 hover-effect flex-fill">
                        <span className="small">Çıkış</span>
                        <input type="date" placeholder="Tarih Seç" className="border-0 bg-transparent form-control-sm" />
                    </div>


                    <div className="d-flex flex-column px-2 py-1 hover-effect flex-fill">
                        <span className="small">Kişiler</span>
                        <div className='d-flex flex-row'>
                            <input type="search" placeholder="Kaç Kişi?" className="border-0 bg-transparent form-control-sm" />
                            <div className='search'>
                                <BiSearch />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchBar