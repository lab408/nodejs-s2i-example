const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('Hello, OpenShift S2I!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
