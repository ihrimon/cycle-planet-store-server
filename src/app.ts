import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorhandler';

/*** 'Cycle Planet Store' application ***/
const app: Application = express();

// parsers
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control'],
    credentials: true,
  })
);
app.use(express.json());

// application route for all api's
app.use('/api', router);

// Root Route
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    success: true,
    message: 'Welcome to Cycle Planet Store' });
});

// handle all error occurs
app.use(globalErrorHandler);

// handle not found error
app.use(notFound);

export default app;
