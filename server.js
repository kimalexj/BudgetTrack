const express = require('express');
const app = express();

// Extract from firestore
app.get('/', (req, res) => {
    const data = [
        
    ]

    res.json(data);
});

// Set to 5000 because react default is 3000
const port = 5000;

app.listen(port, () => {console.log("Server running")});