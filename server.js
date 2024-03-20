const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Route for adding two numbers
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const result = Number(num1) + Number(num2);
  res.send(`The result of ${num1} + ${num2} is ${result}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
