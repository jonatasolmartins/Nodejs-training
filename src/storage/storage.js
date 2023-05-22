const mysql = require('mysql');

const dbConfig = {
    host: "mysql",
    user: "dbuser",
    password: "myapp123",
    database: "myapp"
};

function handleCon() {
//Create a connection to the database
const connection = mysql.createConnection(dbConfig);

//Open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

connection.on('error', (err) => {
    console.error('[db err]', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        handleCon();
    } else {
        throw err;
    }
});
}
//Create a function to query all users in the database
function listUsers() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
};

//Create a function to insert a new user in the database
function insertUser(user) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', user, (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
};

//Create a function to get a user by its id
function getUserById(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE id = ?', id, (error, results) => {
      if (error) return reject(error);
      return resolve(results[0]);
    });
  });
};

module.exports = {
    listUsers,
    insertUser,
    getUserById
};