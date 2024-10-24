import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost', // ou o IP do seu servidor MySQL
  user: 'root',
  password: 'sua_senha',
  database: 'nome_do_banco',
});

export default connection;
