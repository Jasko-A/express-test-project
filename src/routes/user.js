import { Router } from 'express';
import uuidv4 from 'uuid/v4';
import passwordHash from 'password-hash';

var sqlite3 = require("sqlite3").verbose();
var fs = require("fs");
var dbFileName = "mainArt.db";
var db = new sqlite3.Database(dbFileName);

/*CANNOT USE WHERE CLAUSE IN INSERT STATEMENT!!! (gotta check if the not null strings are actually text and not just blankspaces*/
var cmdInsertUser = 'INSERT INTO users (user_id, first_name, last_name, user_name, email, password_hash, time_stamp) VALUES ("ID", "firstname", "lastname", "username", "e-mail",  "password", CURRENT_TIMESTAMP)';
const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

router.post('/submit', (req, res) => {
	console.log(req.body);
	var hashedPassword = passwordHash.generate(req.body.password);
	var userID = uuidv4();
	var cmd = cmdInsertUser.replace("ID", userID);
	cmd = cmd.replace("firstname", req.body.firstname);
	cmd = cmd.replace("lastname", req.body.lastname);
	cmd = cmd.replace("username", req.body.username);
	cmd = cmd.replace("e-mail", req.body.email);
	cmd = cmd.replace(/\bpassword\b/gi, hashedPassword);
	console.log(cmd);
	db.run(cmd, (err) =>
	{
		if(err)
			console.log("error adding user");
		else
			console.log("Adding user complete");
	});
	return res.send("HI");
})

export default router;