const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());

// Get all notes
router.get('/', (req, res) => {
  let sql = `SELECT * FROM notes`;

  req.app.locals.con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ status: 'error' });
    }

    res.json(result);
  });
});

// Get note by ID
router.get('/:id', (req, res) => {
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

// Create a note
router.post('/create', (req, res) => {
  const { title, text, author } = req.body;

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

// Edit notes
router.put('/edit', (req, res) => {
  const { title, text, id } = req.body;

  // Hur uppdaterar man updated? : NEWDATE() eller skicka från frontend?
  const sql = `UPDATE notes SET title = ?, text = ? WHERE id = ?`;

  req.app.locals.con.query(sql, [title, text, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ status: 'error' });
    }
    res.json(result);
  });
});

// Delete note by ID
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
