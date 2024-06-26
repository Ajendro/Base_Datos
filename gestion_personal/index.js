import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import personalfinancesRoutes from './routes/personalfinanceRoutes.js';
import tasksRoutes from './routes/tasksRoutes.js';
import integrationRoutes from './routes/integrationRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import personal_objectivesRoutes from './routes/personal_objetivesRoutes.js';
import financials_goalsRoutes from './routes/financials_goalsRoutes.js';

import config from './config.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', personalfinancesRoutes);
app.use('/api', tasksRoutes);
app.use('/api', integrationRoutes);
app.use('/api', categoryRoutes);
app.use('/api', personal_objectivesRoutes);
app.use('/api', financials_goalsRoutes);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
