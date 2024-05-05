require('./db/connect');

const express = require('express');
const tasks = require('./routes/tasks');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello Tasks Manager');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
