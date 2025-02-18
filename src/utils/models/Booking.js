const { default: mongoose } = require("mongoose");

const bookingSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    image: {
        type: String
    },
    size: {
        type: String
    },
    price: {
        type: String
    },
    color: {
        type: String
    },
    quantity: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

bookingSchema.pre('save', async function (next) {
    try {
        const existingBooking = await BookingModel.findOne({ title: this.title, user: this.user},{new:true});
        if (existingBooking) {
            throw new Error('Duplicate booking detected');
        }
        next();
    } catch (error) {
        next(error);
    }
});

const BookingModel = mongoose.models.booking || mongoose.model('booking', bookingSchema);

export default BookingModel;
