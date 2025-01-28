import React from 'react';


const Reservation = ({ item }) => {
    return (
        <div className="reservation-container">
            <h2 className="price">{item.price}$<span className="night-text"> /gece</span></h2>

            <div className="details-box">
                <div className="details-header">
                    <span>GİRİŞ</span>
                    <span>ÇIKIŞ</span>
                </div>
                <div className="dates">
                    <span>05.02.2025</span>
                    <span>10.02.2025</span>
                </div>
                <div className="guest-selector">
                    <label>MİSAFİR SAYISI</label>
                    <select>
                        <option>1 misafir</option>
                    </select>
                </div>
            </div>

            <button className="reserve-button">Rezerve edin</button>
            <p className="info-text">Henüz sizden tahsilat yapılmayacak</p>

            <div className="pricing">
                <div className="price-item">
                    <span>10.729 ₺ x 5 gece</span>
                    <span>53.646 ₺</span>
                </div>
                <div className="price-item">
                    <span className="link">Temizlik ücreti</span>
                    <span>536 ₺</span>
                </div>
                <div className="price-item">
                    <span className="link">Airbnb hizmet bedeli</span>
                    <span>10.663 ₺</span>
                </div>
                <hr />
                <div className="total-price">
                    <span>Vergiler hariç toplam</span>
                    <span>64.845 ₺</span>
                </div>
            </div>

            <p className="report-link">Bu kaydı bildir</p>
        </div>
    );
};

export default Reservation;