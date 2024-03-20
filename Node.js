// Importing required modules
const express = require('express');

// Creating an instance of express app
const app = express();
const port = 3000; // You can change the port number if needed

// Endpoint to add two numbers
app.get('/add', (req, res) => {
    // Extracting query parameters
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    // Validating input
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    }

    // Calculating the sum
    const sum = num1 + num2;

    // Sending the result as JSON response
    res.json({ result: sum });
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});