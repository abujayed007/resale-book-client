import React from 'react';
import { Link } from 'react-router-dom';
import book1 from '../../../images/books/book1.jpg'
import book2 from '../../../images/books/book2.jpg'
import book3 from '../../../images/books/book3.jpg'

const Banner = () => {

    return (

        <div className="carousel md:w-1/2  lg:w-[900px]  flex mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={book1} alt='' className="rounded-lg" />
                <div className="absolute  lg:top-1/3 left-20 right-[600px] md:top-2/4 sm:top-1/4">
                    <h2 className="lg:text-5xl md:text-3xl text-green-500 font-extrabold">Buy Your
                        <strong className='text-pink-600'>Favorite Books</strong> <strong className='text-blue-500'>From Here</strong>  </h2>
                    <Link> <p className="text-yellow-400">Shop now -❯</p></Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={book2} alt='' className="rounded-lg" />
                <div className="absolute  lg:top-1/3 left-20 right-[600px] md:top-2/4 sm:top-1/4">
                    <h2 className="lg:text-5xl md:text-3xl text-green-500 font-extrabold">Buy Your
                        <strong className='text-pink-600'>Favorite Books</strong> <strong className='text-blue-500'>From Here</strong>  </h2>
                    <Link> <p className="text-yellow-400">Shop now -❯</p></Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={book3} alt='' className="rounded-lg" />
                <div className="absolute  lg:top-1/3 left-20 right-[600px] md:top-2/4 sm:top-1/4">
                    <h2 className="lg:text-5xl md:text-3xl text-green-500 font-extrabold">Buy Your
                        <strong className='text-pink-600'>Favorite Books</strong> <strong className='text-blue-500'>From Here</strong>  </h2>
                    <Link> <p className="text-yellow-400">Shop now -❯</p></Link>
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