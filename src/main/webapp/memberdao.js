// 주제: DAO 모듈 만들기

var pool;

exports.setConnectionPool = (connectionPool) => {
    pool = connectionPool;
};

exports.get = (num, handler) => {
    pool.query('select * from 6_Student where sNum=?',
            [num.id],
            function(err, results) {
        handler(err, results);
    });
};

exports.add0 = (data, handler) => {

    pool.query(
        'insert into 6_Student(sNo,sPassword,sName,sTel,sMajor,sEmail,sYear)\
        values(?, password(?), ?, ?, ?, ?, ?)',
        [data.no, data.password, data.name, data.tel, data.major, data.email, data.year],
        function(err, result) {
            handler(err, result);
    });
};

exports.add1 = (data, handler) => {

    console.log(data.year);
    pool.query(
        'insert into 6_Professor(pNo,pPassword,pName,pTel,pMajor,pEmail)\
        values(?, password(?), ?, ?, ?, ?)',
        [data.no, data.password, data.name, data.tel, data.major, data.email],
        function(err, result) {
            handler(err, result);
    });
};

exports.update = (data, handler) => {
    pool.query(
        'update pms2_member set\
         email=?,\
         pwd=?\
         where mid=?',
        [data.email,
         data.password,
         data.id],
        function(err, result) {
            handler(err, result);
    });
};

exports.remove = (data, handler) => {
    pool.query(
        'delete from pms2_member where mid=?',
        [data.id],
        function(err, result) {
            handler(err, result);
    });
};