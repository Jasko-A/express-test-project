var sqlite3 = require('sqlite3').verbose();
var db;


function startDb() {
	console.log("creating database");
	db = new sqlite3.Database('mainArt.db', createTable);
}

function createTable() {
	console.log("creating table");
	var cmdStr = "CREATE TABLE IF NOT EXISTS users ( user_id INTEGER PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, user_name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL UNIQUE, time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)";
	db.run(cmdStr, (err) =>
	{
		if(err)
			console.log("error creating table");
		else
			console.log("table created successful");
	});
}

function createDatabase() {
	startDb();
}

createDatabase();