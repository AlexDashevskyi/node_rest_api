import mongoose from 'mongoose';

export default function mongoConnection() {
    mongoose.connect('mongodb://localhost:27017/node_rest_api', {useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('error', () => {
      throw new Error('Unable to connect to database');
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose default connection disconnected');
    });
}