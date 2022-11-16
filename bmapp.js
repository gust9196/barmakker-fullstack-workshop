const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv');
const mysqlConnection = require("./bmdatabase");
const port = 3000;

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// If the application is running localhost allow all requests,
// otherwise add cors for specific website
// Remember to add the NODE_ENV="prod" on server!
const cors_url = process.env.NODE_ENV === "prod" ? URL_FOR_FRONTEND : "*";
app.use(
    cors({
        origin: cors_url
    })
);

// bars table

app.get('/bars', (req, res) => {
    const query = "SELECT * FROM barmakker.bars;";
    mysqlConnection.query(
        query,
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

app.get('/bars/:id', (req, res) => {
    const query = "SELECT * FROM barmakker.bars where bar_id = ?;";
    const customer_id = req.params.id;
    mysqlConnection.query(
        query,
        [customer_id],
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

// bar_features table

app.get('/bar_features', (req, res) => {
    const query = "SELECT * FROM barmakker.bar_features;";
    mysqlConnection.query(
        query,
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

app.get('/bar_features/:id', (req, res) => {
    const query = "SELECT * FROM barmakker.bar_features where bar_features_id = ?;";
    const customer_id = req.params.id;
    mysqlConnection.query(
        query,
        [customer_id],
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

// user table

app.get('/user', (req, res) => {
    const query = "SELECT * FROM barmakker.user;";
    mysqlConnection.query(
        query,
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

app.get('/user/:id', (req, res) => {
    const query = "SELECT * FROM barmakker.user where user_id = ?;";
    const customer_id = req.params.id;
    mysqlConnection.query(
        query,
        [customer_id],
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

// favorites

app.get('/favorites', (req, res) => {
    const query = "SELECT * FROM barmakker.favorites;";
    mysqlConnection.query(
        query,
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

/*
app.get('/user/:id', (req, res) => {
    const query = "SELECT * FROM barmakker.farvorites where user_id = ?;";
    const customer_id = req.params.id;
    mysqlConnection.query(
        query,
        [customer_id],
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

 */

app.listen(port, () => {
    console.log(`Node.js REST API listening at http://localhost:${port}`);
});