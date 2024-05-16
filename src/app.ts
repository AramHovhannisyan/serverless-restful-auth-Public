import express from 'express';
import cookieParser from "cookie-parser";
import swaggerOptions from "./config/swaggerOptions";
import userRouter from './routes/userRouter';
import authRouter from './routes/authRouter';
import AppError from './errorHandling/AppError';
import globalErrorHandler from "./errorHandling/globalErrorHandler";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

/**
 * Swagger Setup
 */

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * MiddleWares
 */

app.use(express.json());
app.use(cookieParser());

/**
 * Routes
 */
app.get('/health', (req, res) => res.sendStatus(200));
app.use('/api/v1/user', userRouter);
app.use('/api/v1/auth', authRouter);

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

/**
 * Handling Errors
 */
app.all('*', (req, res, next) => next(new AppError(`Cant find ${req.originalUrl} on this server`, 404)));
app.use(globalErrorHandler);

/**
 * Export app
 */

export default app;
