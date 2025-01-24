import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import { GrLanguage } from 'react-icons/gr'

const Header = () => {
    return (
        <div className="container d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div className="me-3">
                        <img src="logo.png" alt="logo" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center py-3">
                    <h2 className="m-0 fs-5 m-4">Konaklama Yerleri</h2>
                    <h2 className="m-0 fs-5">Deneyimler</h2>
                </div>

                <div className="d-flex align-items-center justify-content-center">
                    <div className="me-3">
                        Evinizi Airbnb'ye taşıyın<GrLanguage className='ms-2' />
                    </div>

                    <div className="d-flex bg-light border border-secondary rounded-pill">
                        <button className="btn border-0">
                            <FiMenu size={24} />
                        </button>
                        <button className="btn border-0">
                            <CgProfile size={24} />
                        </button>
                    </div>
                </div>
            </div >


            <div className="container mt-3">
                <div className="d-flex justify-content-center">
                    <div className="d-flex align-items-center justify-content-between flex-wrap w-75 p-2 shadow-lg bg-body-tertiary rounded-pill">
                        <div className="d-flex flex-column border-2 border-end px-2 py-1 hover-effect flex-fill">
                            <span className="small">Yer</span>
                            <input type="search" placeholder="Gidilecek Yerleri Arayın" className="border-0 bg-transparent form-control-sm" />
                        </div>
                        <div className="d-flex flex-column border-2 border-end px-2 py-1 hover-effect flex-fill">
                            <span className="small">Giriş</span>
                            <input type="search" placeholder="Tarih Seç" className="border-0 bg-transparent form-control-sm" />
                        </div>
                        <div className="d-flex flex-column border-2 px-2 py-1 hover-effect flex-fill">
                            <span className="small">Çıkış</span>
                            <input type="search" placeholder="Tarih Seç" className="border-0 bg-transparent form-control-sm" />
                        </div>
                        <div className="d-flex flex-column border-2 px-2 py-1 hover-effect flex-fill">
                            <span className="small">Kişiler</span>
                            <input type="search" placeholder="Kaç Kişi?" className="border-0 bg-transparent form-control-sm" />
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Header
