import React from 'react';
import book1 from '../../../images/books/book1.jpg'
import book2 from '../../../images/books/book2.jpg'
import book3 from '../../../images/books/book3.jpg'

const Banner = () => {

    return (

        <div className="carousel md:w-2/3 sm:w-2/3 lg:w-10/12  flex mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={book1} alt='' className="rounded-lg" />
                <div className="absolute font-serif left-20 right-20 top-1/4">
                    <h2 class="lg:text-4xl md:text-xl sm:text-lg text-rose-600 font-extrabold">“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</h2>
                    <p className='lg:text-xl md:text-md sm:text-sm text-black font-bold'>Dr. Seuss</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={book2} alt='' className="rounded-lg" />
                <div className="absolute font-serif left-20 right-20 top-1/4">
                    <h2 class="text-4xl md:text-xl sm:text-lg text-rose-600 font-extrabold">“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</h2>
                    <p className='lg:text-xl md:text-md sm:text-sm  text-black font-bold'>Dr. Seuss</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={book3} alt='' className="rounded-lg" />
                <div className="absolute font-serif left-20 right-20 top-1/4">
                    <h2 class="text-4xl md:text-xl sm:text-lg text-rose-600 font-extrabold">“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</h2>
                    <p className='lg:text-xl md:text-md sm:text-sm  text-black font-bold'>Dr. Seuss</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;