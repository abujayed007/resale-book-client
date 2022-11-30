import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import moment from 'moment';
import { toast } from 'react-toastify';


const BookingModal = ({ selectedBook, setSelectedBook }) => {
    const { user } = useContext(AuthContext)
    const date = moment().format("MMM Do YY");
    const { name:itemName, id, story, location, resalePrice, originalPrice } = selectedBook;

    const handleBooking = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value

        const myBooking = {
            bookingDate : date,
            item: itemName,
            name, 
            email,
            location,
            phone,
        }
        console.log(myBooking);
        setSelectedBook(null)
        toast.success('Booking Successful')

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-3">{itemName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-y-3'>
                        <input type="text" disabled defaultValue={date} className="input w-full input-bordered" />
                        <input type="text" disabled defaultValue={`Price:${resalePrice}`} className="input w-full input-bordered" />
                        <input name='name' type="text" defaultValue={user?.displayName} className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder='Location' className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder='Phone Number' className="input w-full input-bordered" />
                        <input className='btn btn-sm w-1/2 max-w-xs' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;