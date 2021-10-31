const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Adding a database get that will get all previous feedback forms. 
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback" ORDER BY "id";')
        .then((response) => {
            console.log('Successful get! -> ', response.rows);
            res.send(response.rows)
        }).catch((err) => {
            console.log('Error getting from db ->', err);
            res.sendStatus(500);
        })
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

//Exporting so the pool can use this.
module.exports = router;