var sqlite3 = require('sqlite3');
 
var db = new sqlite3.Database('BD_SCA.db');
 
db.serialize(function() {

// Create a table
db.run("CREATE TABLE IF NOT EXISTS TB_ALUNO (id INTEGER PRIMARY KEY, nome TEXT)");

db.run("CREATE TABLE IF NOT EXISTS TB_PROFESSOR (id INTEGER PRIMARY KEY, nome TEXT)");
  
db.run("CREATE TABLE IF NOT EXISTS TB_DISCIPLINA (id INTEGER PRIMARY KEY, nome TEXT)");
  
db.run("CREATE TABLE IF NOT EXISTS TB_MATRICULA (id INTEGER PRIMARY KEY, aluno_id INTEGER REFERENCES TB_ALUNO (id), disciplina_id INTEGER REFERENCES TB_DISCIPLINA (id), professor_id INTEGER REFERENCES TB_PROFESSOR (id) )");

db.run("CREATE TABLE IF NOT EXISTS TB_ALUNO (id INTEGER PRIMARY KEY, professor_id INTEGER REFERENCES TB_PROFESSOR (id) , disciplina_id INTEGER REFERENCES TB_DISCIPLINA (id) )");

  // Insert data into the table  
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('layana')");
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('bia')");
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('nadja ')");
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('yorrana')");
db.run("INSERT INTO TB_ALUNO (nome) VALUES ('iara')");

db.run("INSERT INTO TB_PROFESSOR (nome) VALUES ('TAVEIRA')");
db.run("INSERT INTO TB_PROFESSOR (nome) VALUES ('CESAR OLAVO ')");

db.run("INSERT INTO TB_DISCIPLINA (nome) VALUES ('historia')");
db.run("INSERT INTO TB_DISCIPLINA (nome) VALUES ('fisica')");
   });


db.each("SELECT id, nome FROM TB_ALUNO", function(err, row) {
    console.log(row.id + ": " + row.nome);
  });

db.each("SELECT id, nome FROM TB_PROFESSOR", function(err, row) {
    console.log(row.id + ": " + row.nome);
  });
db.each("SELECT id, nome FROM TB_DISCIPLINA", function(err, row) {
    console.log(row.id + ": " + row.nome);
  });
db.close();


