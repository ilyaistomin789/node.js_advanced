const express = require('express');
const DictionaryRouter = require('./routes/dictionaryRouter');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express"),
    swaggerDocument = require("./swagger.json");
app.use(bodyParser.json());

app.use(DictionaryRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000);
