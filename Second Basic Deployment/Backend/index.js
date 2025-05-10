import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready');
});

//Get 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'First Joke',
            content: 'This is the first joke'
        },
        {
            id: 2,
            title: 'Second Joke',
            content: 'This is the second joke'
        },  
        {
            id: 3,
            title: 'Third Joke',
            content: 'This is the third joke'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            content: 'This is the fourth joke'
        },
        {
            id: 5,
            title: 'Fifth Joke',
            content: 'This is the fifth joke'
        }
    ];
    res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);