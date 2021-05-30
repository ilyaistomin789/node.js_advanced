const DirectoryRouter = require('./routes/directoryRouter');
const express = require('express');
const app = express();
const config = require('./config/config');

app.use(DirectoryRouter);
app.listen(config.PORT);



