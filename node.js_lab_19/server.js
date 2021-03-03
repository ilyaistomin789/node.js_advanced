const express = require('express');
const auditoriumRouter = require('./routes/auditoriumRouter');
const auditoriumTypeRouter = require('./routes/auditoriumTypeRouter');
const facultyRouter = require('./routes/facultyRouter');
const pulpitRouter = require('./routes/pulpitRouter');
const subjectRouter = require('./routes/subjectRouter');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '10mb'}));
app.use('/auditorium', auditoriumRouter);
app.use('/auditoriumType', auditoriumTypeRouter);
app.use('/faculty', facultyRouter);
app.use('/pulpit', pulpitRouter);
app.use('/subject', subjectRouter);

app.listen(3000);
