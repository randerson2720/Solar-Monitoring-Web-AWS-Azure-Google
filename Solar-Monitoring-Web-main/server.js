const express = require('express');
const app = express();

const PORT = process.env.PORT || 1137;

// Parse JSON
app.use(express.json());

// Serve static files
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

//store the data
let solarData = {};

// Recieve the JSON data from the Python code
app.post('/api/data', (req,res) => {
    const jsonData = req.body;
    console.log('Received JSON data:', solarData);
    res.status(200).json({message: 'Data received.'});
});

app.get('api/data', (req, res) => {
    res.status(200).json(solarData);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


