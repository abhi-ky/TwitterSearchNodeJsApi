const express = require('express');
const app = express();

const usersAccountRoutes = require('./api/routes/usersAccountRoutes/usersAccountRoutes');
const hashtagRoutes = require('./api/routes/usersAccountRoutes/hashtagRoutes')

app.use('/twittersearch', usersAccountRoutes);
app.use('/hashtags', hashtagRoutes);


module.exports = app;

