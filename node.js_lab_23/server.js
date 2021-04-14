const express = require('express')
const AuthRouter = require('./routes/authRouter');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

app.use(AuthRouter);

app.listen(3000);
