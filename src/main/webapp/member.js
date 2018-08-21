// 주제: DAO 분리

const mysql = require('mysql')
const express = require('express')
const router = express.Router();
const memberdao = require('./memberdao')

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '13.125.145.195', 
    port: '3306',
    database: 'studydb',
    user: 'study',
    password: '1111'
});

memberdao.setConnectionPool(pool);


// get 요청에 대해 핸들러를 등록하기
router.get('/get', (req, res) => {

    memberdao.get(req.query, (err, results) => {
        if (err) {
            return;
        }
        console.log(results);
        res.send(results);
    });
});

router.post('/add0', (req, res) => {
    
    memberdao.add0(req.body, (err, result) => {
        if (err) {
            res.send("1");
        } else {
            res.send("0");
        }
    }); 

    return;
});

router.post('/add1', (req, res) => {
    
    memberdao.add1(req.body, (err, result) => {
        if (err) {
            res.send("1");
        } else {
            res.send("0");
        }
    }); 

    return;
});

router.get('/update', (req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain;charset=UTF-8'});
    memberdao.update(req.query, (err, result) => {
        if (err) {
            res.end('DB 조회 중 예외 발생!')
            return;
        }
        
        res.write('변경 성공!')
        res.end();
    });
});

router.get('/delete', (req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain;charset=UTF-8'});
    memberdao.remove(req.query, (err, result) => {
        if (err) {
            res.end('DB 조회 중 예외 발생!')
            return;
        }
        res.write('삭제 성공!')
        res.end();
    });
});


module.exports = router;