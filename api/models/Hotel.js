import mongoose from 'mongoose';

const HotelSchema = new mongo.Schema({
    name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      distance: {
        type: Number,
        required: true
      },
      photos: {
        type: [String],
        required: true
      },
      desc: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        min:0,
        max:5,
        required: true
      },
      rooms: {
        type: [String],
        required: true
      },
      cheapestPrice: {
        type: Number,
        required: true
      },
      features: {
        type: [String],
        required: true
      }
}); 


export default mongoose.model("Hotel",HotelSchema);