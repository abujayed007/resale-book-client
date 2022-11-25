import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const About = () => {
    const { data: booksCategories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="hero shadow-lg w-10/12 mx-auto  ju mt-5 gap-x-80">
            <div className="hero-content flex-col lg:flex-row-reverse flex justify-between">
                <img src='https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg' className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div className='items-center px-20'>
                    <h2 class="lg:text-3xl sm:text-xl font-bold text-blue-700">Our Book Categoriess</h2>
                    {
                        booksCategories.map((book, i) => <>
                       <Link> <h2 key={book._id} className='lg:text-2xl sm:text-xl font-semibold text-yellow-600 hover:text-pink-400'>{i+1}. {book.category}</h2></Link>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;