import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Index Page</h1>');
})

app.get('/about', (req, res) => {
    res.status(200).send('<h1>About Page</h1>');
})

app.get('/contact', (req, res) => {
    res.status(200).send('<h1>Contact Page</h1>');
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 NOT FOUND</h1>');
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});