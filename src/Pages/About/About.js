import React from 'react';
import CategoryName from '../Categories/CategoryName';

const About = () => {

    return (
        <div className="hero shadow-lg w-10/12 mx-auto  ju mt-5 gap-x-80 ">
            <div className="hero-content flex-col lg:flex-row-reverse flex justify-between">
                <img src='https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg' className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div className='items-center px-20'>
                    <h2 className="lg:text-3xl sm:text-xl font-bold text-blue-700 font-serif">Our Book Categories</h2>
                   <CategoryName></CategoryName>
                </div>
            </div>
        </div>
    );
};

export default About;