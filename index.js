const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000 || process.env.PORT;

// Static Files
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(expressLayouts);
app.set('layout', './layouts/main.ejs');
app.set('view engine', 'ejs');

app.use('/', require('./routes/index.js'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

