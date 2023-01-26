import mysql from "mysql2";

class Database{

	constructor(host, database, user, password, collback){
		this.host = host;
		this.user = user;
		this.database = database;
		this.password = password;
		this.connect(collback);
	}
	connect(collback){
		this.connection = mysql.createConnection({
			host: this.host,
			user: this.user,
			database: this.database,
			password: this.password
		});
		this.connection.connect(function(err){
			if(err){
				console.error(err);
			}else{
				collback();
			}
		});
	}
	endConntect(){
		this.connection.end(function(err) {
		if (err) {
			return console.log("Ошибка: " + err.message);
		}
			console.log("Подключение закрыто");
		});
	}
	query(collback, type, select, table, where){
		table = "`"+table+"`";
		var q = `${type} ${select} FROM ${table}`;
		if(where){
			q += ``;
		}
		this.connection.query(
			q,
			['Page', 45],
			function(error, result){
				if(error){
					console.error();
				}else{
					collback(result);
				}
			},
		);
		
	}
	queryJoin(collback, type, select, table, where){
		table = "`"+table+"`";
		var q = `${type} ${select} FROM ${table}`;
		if(where){
			q += ``;
		}
		this.connection.query(
			q,
			['Page', 45],
			function(error, result){
				if(error){
					console.error();
				}else{
					collback(result);
				}
			},
		);
		
	}
}


export default Database;
