import serverless from 'serverless-http';
import app from './app';
import connect from './config/db';
import AppError from './errorHandling/AppError';

connect()
.then(() => {
  console.info('connected to DB');
})
.catch(err => {
  console.error('error while connecting DB', err);
  throw new AppError("Can't establish a connection to the database", 500);
});

export const handler = serverless(app);
