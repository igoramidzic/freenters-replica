var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'articles'
});

connection.connect();

var article = {
  author: "Igor",
  title: "Some Title",
  body: "Some body information"
}

var query = connection.query('INSERT INTO articles SET ?', article, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
});

module.exports = {
  connection
};
