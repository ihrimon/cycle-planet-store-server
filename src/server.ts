import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

const server = async () => {
  try {
    await mongoose.connect(config.database_uri as string);

    app.listen(config.port, () => {
      console.log(`Cycle Planet App is listening port at ${config.port}`);
    });
  } catch (error) {
    console.log('Error in server.ts file: ', error);
  }
};

server();
