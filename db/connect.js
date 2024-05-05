const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://dazzdev:darek200180@nodeexpressproject.3lwrcmo.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProject';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the db...');
  })
  .catch((err) => console.log(err));
