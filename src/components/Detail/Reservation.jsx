import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice, setCheckIn, setCheckOut } from "../../store/slice/bookingSlice";

const Reservation = ({ item }) => {


    const dispatch = useDispatch();

    const pricePerNight = useSelector((state) => state.booking.pricePerNight);
    const checkIn = useSelector((state) => state.booking.checkIn);
    const checkOut = useSelector((state) => state.booking.checkOut);
    const nights = useSelector((state) => state.booking.nights);



    const totalPrice = pricePerNight * nights;


    useEffect(() => {
        dispatch(setPrice(item.price))
    }, [item.price, dispatch])





    return (
        <div className="reservation-container">
            <h2 className="price">{pricePerNight}$<span className="night-text"> /gece</span></h2>

            <div className="details-box">
                <div className="details-header">
                    <span>GİRİŞ</span>
                    <span>ÇIKIŞ</span>
                </div>
                <div className="dates">
                    <input
                        type="date"
                        value={checkIn || ""}
                        onChange={(e) => dispatch(setCheckIn(e.target.value))}
                    />
                    <input
                        type="date"
                        value={checkOut || ""}
                        onChange={(e) => dispatch(setCheckOut(e.target.value))}
                    />
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
                    <span>{pricePerNight} ₺ x {nights} gece</span>
                    <span>{totalPrice} ₺</span>
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
                    <span>{totalPrice + 536 + 10663} ₺</span>
                </div>
            </div>

            <p className="report-link">Bu kaydı bildir</p>
        </div>
    );
};

export default Reservation;