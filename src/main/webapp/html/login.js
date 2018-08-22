'use strict'

$('#loginBtn').click(() => {
	if($('#formc').val() == 0){
		  $.post(`${serverApiAddr}/json/auth/signIn`, {
		        'email': $('#no').val(),
		        'password': $('#pwd').val(),
		    }, (result) => {
		        if (result.status === 'success') {
		            location.href = 'Lecture/list.html'
		        } else {
		            alert('로그인 실패!')
		        }
		    }, 'json')
		    .fail(() => {
		        alert('서버 요청 중 오류 발생!')
		    });
	}else{
		$.post(`${serverApiAddr}/json/auth/signIn`, {
	        'email': $('#no').val(),
	        'password': $('#pwd').val(),
	    }, (result) => {
	        if (result.status === 'success') {
	            location.href = 'Lecture/list.html'
	        } else {
	            alert('로그인 실패!')
	        }
	    }, 'json')
	    .fail(() => {
	        alert('서버 요청 중 오류 발생!')
	    });
		
	}
});
