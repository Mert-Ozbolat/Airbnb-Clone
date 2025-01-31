import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import { GrLanguage } from 'react-icons/gr'
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [startDate, setStartDate] = useState(new Date());
    const navigation = useNavigate()

    return (
        <div className="container d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div className="me-3">
                        <img onClick={() => navigation.navigate('/')} src="logo.png" alt="logo" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
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
        </div >
    )
}

export default Header
