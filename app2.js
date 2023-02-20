const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static('public'));

router.get('/', (req,res) => {
    res.sendFile('home.html');
});

app.use('/', router);
app.listen(3000);