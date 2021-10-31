
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

// Adding a database post route for when a user submits.
router.post('/', (req, res) => {
    const queryText = (`
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments"),
	VALUES($0, $1, $2, $3);
    `);
    const values = [feedback];
    pool.query(queryText, values).then((res) => {
        console.log('Post successful!');
        res.send(201);
    }).catch((err) => {
        console.log('Error posting ->', err);
    });
})

//Exporting so the pool can use this.
module.exports = router;