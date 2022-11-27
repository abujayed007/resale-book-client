import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryBook from './CategoryBook';

const Books = () => {
  const books = useLoaderData()


  console.log(books)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
             {
              books.map((book) => <CategoryBook key={book._id}  book={book}></CategoryBook>)
             }
        </div>
    );
};

export default Books;