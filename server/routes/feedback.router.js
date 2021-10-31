const router = express.Router();
const express = require('express');
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback";');
}).then((response) => {
    console.log('Successful get! -> ', response.data);
    dispatch({
        type: "???",
        payload: response.data,
        // Should data be rows??
    });
}).catch((err) => {
    console.log('Error getting from db ->', err);
    res.sendStatus(500);
});


// EDIT
// router.post('/', (req, res) => {
//     pool.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
// VALUES($1, $2, $3, $4, $5, $6))
//     const queryText = ('')
// }).then((res) => {
//     console.log('Post successful!');
//     res.send(201);
// }).catch((err) => {
//     console.log('Error posting ->', err);
// });