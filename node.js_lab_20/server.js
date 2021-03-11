require('dotenv').config();
const express = require("express");
const app = express();

const phoneDirectoryRouter = require('./routes/phoneDirectoryRouter');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use(phoneDirectoryRouter);


app.listen(process.env.PORT);

