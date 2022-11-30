import React from 'react';

const BookingItems = ({ booking }) => {
    const {img, item, name, email, location, phone, price} = booking
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item}</h2>
                <p className='font-bold'><strong>Price: {price}</strong> </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Pay</button>
                </div>
            </div>
        </div>
    );
};

export default BookingItems;