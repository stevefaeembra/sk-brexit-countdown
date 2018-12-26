const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './client/public');

app.use('/', express.static(publicPath));
app.use(bodyParser.json());
const port = process.env.PORT || 3000


app.listen(port, function () {
  console.log(`Started server on port ${port}.`);
});
