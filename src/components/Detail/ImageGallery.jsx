import React from "react";

const ImageGallery = ({ images }) => {
    return (
        <div className="gallery-container">
            <div className="main-image">
                <img src={images[0]} alt="Main View" />
            </div>
            <div className="grid-images">
                {images.slice(1, 5).map((image, index) => (
                    <div key={index} className="grid-item">
                        <img src={image} alt={`View ${index + 1}`} />
                    </div>
                ))}
                <button className="view-all">Tüm fotoğrafları göster</button>
            </div>
        </div>
    );
};

export default ImageGallery;
