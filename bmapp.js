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
const cors_url = process.env.NODE_ENV === "prod" ? URL_FOR_FRONTEND : "https://github.com/Frizzy1209/BarMakker";
app.use(
    cors({
        origin: cors_url
    })
);

// EVERYTHING FROM BARS TABLE

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

// BARS TABLE MED ID

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

// BARS TABLE MED POST

app.post('/bars/create', (req, res,) => {
    const bar_name = req.body.bar_name;
    const bar_location = req.body.bar_location
    const bar_city = req.body.bar_city
    const bar_description = req.body.bar_description
    let query = "INSERT INTO bars (bar_name, bar_location, bar_city, bar_description) VALUES (?,?,?,?)";
    mysqlConnection.query(
        query,
        [bar_name, bar_location, bar_city, bar_description],
        (err, results, fields) => {
            if (!err) {
                res.sendStatus(200);
            } else {
                console.log(err);
            }
        }
    );
});

// BARS OG BAR_FEATURES JOINET I ET TABLE

app.get('/johnny', (req, res) => {
    console.log('helloer world')
    let query = "SELECT * FROM barmakker.bars INNER JOIN bar_features ON bars.bar_id = bar_features.fk_bar_id;";
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

// EVERYTHING FROM BAR_FEATURES TABLE

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

// BAR_FEATURES TABLE ID

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

// BAR FEATURES POST

app.post('/bar_features/create', (req, res,) => {
    const fk_bar_id = req.body.fk_bar_id;
    const opening_hours = req.body.opening_hours
    const prices = req.body.prices
    const games = req.body.games
    const billiard = req.body.billiard
    const smoking_allowed = req.body.smoking_allowed
    const happy_hour = req.body.happy_hour
    const viser_sport = req.body.viser_sport
    let barFeatureQuery = "INSERT INTO bar_features (fk_bar_id, opening_hours, prices, games, billiard, smoking_allowed, happy_hour, viser_sport) VALUES (?,?,?,?,?,?,?,?)";
    mysqlConnection.query(
        barFeatureQuery,
        [fk_bar_id, opening_hours, prices, games, billiard, smoking_allowed, happy_hour, viser_sport],
        (err, results, fields) => {
            if (!err) {
                res.sendStatus(200);
            } else {
                console.log(err);
            }
        }
    );
});

// EVERYTHING FROM USER TABLE

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

// USER TABLE ID

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

// USER TABLE POST

app.post('/user/create', (req, res,) => {
    const user_name = req.body.user_name;
    const user_email = req.body.user_email
    let query = "INSERT INTO user (user_name, user_email) VALUES (?,?)";
    mysqlConnection.query(
        query,
        [user_name, user_email],
        (err, results, fields) => {
            if (!err) {
                res.sendStatus(200);
            } else {
                console.log(err);
            }
        }
    );
});

// FAVORITES TABLE

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
