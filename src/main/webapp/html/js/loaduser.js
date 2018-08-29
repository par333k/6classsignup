let userDiv;
let userNo;

$.getJSON(`${serverApiAddr}/json/professor/getsession`, {
    dummy: 0
}).done(
    function (result) {
        data = result[0];
        console.log(result);

        userDiv = result.user;
        if (userDiv == 'professor') userNo = result.info.pNum;
        else userNo = result.info.sNum;
    });