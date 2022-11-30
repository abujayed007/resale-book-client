import React from 'react';

const CategoryBook = ({ book, setSelectedBook }) => {
    const { _id, name, img, story, location, resalePrice, originalPrice} = book

    return (
        <div className="card shadow-xl">
            <figure className="py-3">
                <img src={img} alt="Shoes" className="h-[250px] w-10/12 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className=''>Resale Price: <strong>${resalePrice}</strong></p>
                <p className=''>Original Price: <strong>${originalPrice}</strong></p>
                <p className='text-primary-focus'>Location: {location}</p>
                <p>
                    {

                        story?.length > 300 ? story.slice(1, 300) + '...' : {story}
                    }
                </p>
                <div className="card-actions">
                    <label 
                    htmlFor="booking-modal" 
                    onClick={()=>setSelectedBook(book)}
                    className="btn bg-green-500">
                        Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default CategoryBook;