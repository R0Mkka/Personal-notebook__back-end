const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

app.use(morgan('combined'));
app.use(cors(require('./cors')));
// app.use(bodyParser.json()); // TODO: Think about options
// app.use(bodyParser.urlencoded({ extended: true }));

// require('./routes')(app);

app.get('/', (req, res) => {
    res.send({
        kek: 'test',
    });
});

app.listen(
    PORT,
    () => {
        console.log(`App is listening on port: ${PORT}!`);
        // mongoose.connect(
        //     `mongodb+srv://${DB_USER}:${DB_PASSWORD}@base-cluster.hdsjj.mongodb.net/${DB_NAME}`,
        //     {
        //         useNewUrlParser: true,
        //         useUnifiedTopology: true,
        //     },
        // )
        // .then(() => {
        //     console.log('DB connected!');
        //     console.log(`App is listening on port: ${PORT}!`);
        // })
        // .catch((error) => {
        //     console.error('APP LAUNCHING ERROR:', error);
        //     mongoose.disconnect();
        // });
    },
);