const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
let name = "Piotrek";

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: "Dodaj nowego padawana: "    
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});