import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingItems from './BookingItems';

const MyBookings = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = []} = useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            return data
        }
    
    })



    return (
        <div>
            <h2 className='text-2xl font-bold'>You have {bookings.length} bookings</h2>
           <div className='grid md:grid-cols-2 sm:grid-cols-1'>
           {
                bookings.map(booking => <BookingItems key={booking._id} booking={booking}> </BookingItems>)
            }
           </div>
        </div>
    );
};

export default MyBookings;