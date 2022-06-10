const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const cors = require('cors');

router.use(cors());

router.post('/', (req, res, next) => {
  const { username, password } = req.body;

  let sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  req.app.locals.con.query(sql, [username, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ status: 'error' });
    }
    if (result.length > 0) {
      res.json({ result, status: 'ok' });
    } else {
      res.json({ status: 'wrong' });
    }
  });
});

module.exports = router;
