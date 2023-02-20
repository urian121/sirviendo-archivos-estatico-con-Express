const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log(__dirname);
    var x = path.join('Users', 'urian', '..', 'logo.png');
    console.log(x);

    const myPath = path.join("users", "admin", "../index.js");
    console.log(myPath);
});


app.use('/static', express.static('public'));
//app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(PORT, () =>
  console.log(`Server listening on port: ${PORT}`),
);
