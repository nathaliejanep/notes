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

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  let sql = `SELECT * FROM notes WHERE id = ?`;

  req.app.locals.con.query(sql, id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ status: 'error' });
    }

    res.json(result);
  });
});

router.post('/create', (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  const author = req.body.author;

  console.log(title + text + author);
  let sql = `INSERT INTO notes (title, text, author) VALUES (?,?,?)`;

  // Behöver man inte hämta/connect igen?
  req.app.locals.con.query(sql, [title, text, author], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ status: 'error' });
    }

    res.json(result);
  });
});

router.put('/edit', (req, res) => {
  const id = req.body.id;
  const text = req.body.text;

  // uppdatera time : CURRENT_TIMESTAMP ? title
  const sql = `UPDATE notes SET text = ? WHERE id = ?`;

  req.app.locals.con.query(sql, [text, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ status: 'error' });
    }
    res.json(result);
  });
});

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM notes WHERE id = ?`;

  req.app.locals.con.query(sql, id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ status: 'error' });
    }
    res.json(result);
  });
});

module.exports = router;
