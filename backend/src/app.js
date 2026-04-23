import express from 'express'
import teams from './routes/teams.js'
import groups from './routes/groups.js'
import brackets from './routes/bracket.js'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/teams', teams);
app.use('/groups', groups);
app.use('/brackets', brackets);

export default app;