const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all times
    const queryText = `SELECT * FROM schedule;`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
            console.log('result rows', result.rows )
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;