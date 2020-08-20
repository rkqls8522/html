var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'dbtest'
});

connection.connect();

function select(){
  connection.query('SELECT * FROM usertest;', function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
  connection.end();
}
insert('rkrk22','rkskek1@','gabin','male',20,'rudrleh tjskdf','010-1212-1213','number@naver.com');
function insert(id,password,name,sex,age,juso,number,e_mail){
  connection.query(`insert into usertest (id,password,name,sex,age,juso,number,e_mail) value('${id}','${password}','${name}','${sex}','${age}','${juso}','${number}','${e_mail}',);`, function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    select();
  });
  connection.end();
}
