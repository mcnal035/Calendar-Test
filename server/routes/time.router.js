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

router.post('/', (req,res) =>{
    const newTripTimes = req.body;
    const queryText = `INSERT INTO "schedule" ("start_date", "end_date", "name") VALUES($1, $2, $3);`;
    const queryValues = [
        newTripTimes.start_date,
        newTripTimes.end_date,
        newTripTimes.name,
    ];
    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

module.exports = router;