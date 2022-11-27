import React from 'react';
import moment from 'moment';

const CategoryBook = ({ book }) => {
    const { _id, name, img, story, location, resalePrice, originalPrice} = book
    const date = moment().format("MMM Do YY"); 

    return (
        <div className="card shadow-xl">
            <figure className="py-3">
                <img src={img} alt="Shoes" className="h-[250px] w-10/12 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className=''>Resale Price: <strong>${resalePrice}</strong></p>
                <p className=''>Original Price: <strong>${originalPrice}</strong></p>
                <p className=''>{date}</p>
                <p className='text-primary-focus'>Location: {location}</p>
                <p>
                    {
                        story.length > 300 ? story.slice(1, 300) + '...' : {story}
                    }
                </p>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryBook;