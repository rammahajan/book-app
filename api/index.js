import express from 'express';
import bodyParser from 'body-parser';
import config from 'dotenv';
import bookRoutes from './server/routes/BookRoutes';
import moodRoutes from './server/routes/MoodRoutes';

config.config();

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

const port = process.env.PORT || 8000;

app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/moods', moodRoutes);

app.get('*', (req, res) => {
    res.status(200).send({
        message: 'Welcome to this API!'
    })
});

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
});

export default app;