const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

// Static Files
app.use(express.static('public'));

app.use('/', require('./routes/index.js'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
