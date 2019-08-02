const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Route
const timeRouter = require('./routes/timeRouter');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/* Routes */
app.use('/api/schedule', timeRouter);

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, function () {
    console.log('Listening on port: ', PORT);
});