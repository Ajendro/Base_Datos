import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import personalfinancesRoutes from './routes/personalfinanceRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import quoteRoutes from './routes/quoteRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import bank_accountRoutes from './routes/bank_accountRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import authenticationRoutes from './routes/authenticationRoutes.js';
import authentication_methodRoutes from './routes/authentication_methodRoutes.js';

import config from './config.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', personalfinancesRoutes);
app.use('/api', reportRoutes);
app.use('/api', quoteRoutes);
app.use('/api', notificationRoutes);
app.use('/api', bank_accountRoutes);
app.use('/api', healthRoutes);
app.use('/api', authenticationRoutes);
app.use('/api', authentication_methodRoutes);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
