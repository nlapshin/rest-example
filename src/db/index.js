import mongoose from 'mongoose';

export default {
  async run() {
    await mongoose.connect('mongodb://localhost:27017/movie');

    console.log('mongoose connected')
  }
}
