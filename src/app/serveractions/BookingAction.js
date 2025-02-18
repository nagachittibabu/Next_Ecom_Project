'use server';

import { redirect } from 'next/navigation';
import DBConnect from '../../utils/config/db';
import { auth } from '../auth';
import BookingModel from '../../utils/models/Booking';
import UserModel from '@/utils/models/User';

const session = await auth();
const userId=session.userid;
if (!session) {
  alert('Please login to buy the order');
  redirect('/Login');
}

const BookingAction = async (bookingData) => {
  await DBConnect();
  try {
  if (session.userid) {
    const userBookingDetails = await BookingModel.create({
      userId :session.userId,
      title: bookingData[0].title,
      image: bookingData[0].image,
      price: bookingData[0].price,
      quantity:bookingData[0].quantity,
      size: bookingData[0].size,
      color: bookingData[0].color,
    });
    await UserModel.findByIdAndUpdate(
        session.userid,
        {$push:{bookings :userBookingDetails._id}},
        {new:true}
    )   
    return {success:true}
  }
  } catch (error) {
    
    console.log(error);  }
};

export default BookingAction;
