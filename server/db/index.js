const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'root', 
    database: 'database_myfitness' 
  });

 
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;