const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // Receive this eventually from firebase
    const data = [
        
    ]

    res.json(data);
});

// Set to 5000 because react default is 3000
const port = 5000;

app.listen(port, () => {console.log("Server running")});