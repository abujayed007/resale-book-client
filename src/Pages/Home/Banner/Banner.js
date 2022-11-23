import React from 'react';
import book1 from '../../../images/books/book1.jpg'
import book2 from '../../../images/books/book2.jpg'
import book3 from '../../../images/books/book3.jpg'

const Banner = () => {
    return (
        
            <div className="carousel w-[900px]  flex mx-auto py-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={book1} alt='' className="rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-2/3 left-[750px] gap-x-2 top-[520px]">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={book2} alt='' className="rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-2/3 left-[750px] gap-x-2 top-[520px]">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={book3} alt='' className="rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-2/3 left-[750px] gap-x-2 top-[520px]">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;