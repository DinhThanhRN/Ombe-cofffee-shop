const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({mesage: 'Hello from server side', app: 'OmbeChat'});
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running in port ${port}...`);
});
