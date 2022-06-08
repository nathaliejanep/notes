const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', (req, res, next) => {
  let sql = `SELECT * FROM notes`;

  req.app.locals.con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ status: 'error' });
    }

    res.json(result);
  });
});

router.post('/add', (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  const author = req.body.author;

  console.log(title + text + author);
  let sql = `INSERT INTO notes (title, text, author) VALUES (?,?,?)`;

  req.app.locals.con.query(sql, [title, text, author], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ status: 'error' });
    }

    res.json(result);
  });
});

module.exports = router;
