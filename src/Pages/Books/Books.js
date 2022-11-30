import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoryBook from './CategoryBook';

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null)
  const books = useLoaderData()


  console.log(books)
  return (
    <section>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
        {
          books.map((book) => <CategoryBook
            setSelectedBook={setSelectedBook}
            key={book._id}
            book={book}></CategoryBook>)
        }
      </div>
        {
          selectedBook &&
          <BookingModal
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
          >
          </BookingModal>
        }
      
    </section>
  );
};

export default Books;