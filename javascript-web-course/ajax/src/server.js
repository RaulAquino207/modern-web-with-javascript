const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('.'));

app.listen(8080, () => {
    console.log('Server started on port 8080');
})