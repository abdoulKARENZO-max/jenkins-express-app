// Load environment variables first
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Jenkins route
app.get('/jenkins', (req, res) => {
    res.send('Express app is working!');
});
// Start server
app.listen(port, () => {
    console.log(`express-app listening on port ${port}`);
});