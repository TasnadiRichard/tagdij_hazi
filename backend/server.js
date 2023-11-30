const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tagdij'
});


app.listen(3000, () => {
    console.log('Server is runinng on port 3000');
});