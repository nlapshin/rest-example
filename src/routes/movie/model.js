import mongoose from 'mongoose'
const { Schema } = mongoose

const movieSchema = new Schema({
  name: { type: String, required: true },
  country:  { type: String, required: true },
  year:  { type: Number, required: true },
  rating: { type: Number, required: true }
});

export default mongoose.model('Movie', movieSchema)
