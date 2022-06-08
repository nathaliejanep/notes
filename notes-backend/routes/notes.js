const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

/* GET users listing. */
router.get('/', (req, res, next) => {

req.app.locals.con.connect((err)=> {
  if(err){
    console.log(err);
  }

  let saveAuth = "nathalie"
  let sql = `
    INSERT INTO testnote (author) VALUE ('${saveAuth})
  `

  req.app.locals.con.query(sql, (err,result)=>{
    if(err) console.log(err);

    let html = '';

    for (note in result){
      html += `${result[note].author}`;
    }
    res.send(html);
  })
})

 
});

module.exports = router;
