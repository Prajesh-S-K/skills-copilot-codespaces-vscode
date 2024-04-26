// Create web server using Express
// Create a route that will handle POST requests to /comments
// The route will accept form data and add it to the comments array
// The route will respond with the updated comments array
// Test the route using Postman

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let comments = [];

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.send(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
