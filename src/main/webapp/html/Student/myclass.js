'use strict'

let tbody = $('#eListTable > tbody'); 
let data = null;


$(function loadList(){
	console.log('로드됨!');
	$.getJSON(`${serverApiAddr}/json/apply/myApplyList`,{	
	}).done(function(resultApplyList){
		console.log(resultApplyList.status);
		console.log(resultApplyList.myApplyList);
		data = resultApplyList;
		tbody.html('');
		for(var item of data.myApplyList){
			$("<tr>").html(`<th scope="row">${item.lectureNo}</th>
                        <td>${item.lectureSubject}</td>
                        <td>${item.lectureName}</td>
                        <td>${item.lectureRoom}</td>
                        <td>${item.lectureStartDay}</td>
                        <td>${item.lectureEndDay}</td>
                        <td>${item.lectureMember}/${item.lectureMaxMember}</td>
                        <td><button type="button" id="cancel" class="btn btn-outline-success">철회하기</button>`).appendTo(tbody);
		}
		tbody.on('click', '#cancel', function(event) {
		    event.preventDefault();
		    $.getJSON(`${serverApiAddr}/json/studentlist/applyDelete?lectureNo=${item.lectureNo}`,
		    		function(result){
		    	if(result.status =="success"){
		    		swal('강의신청을 철회하였습니다!')
		    	}
		    	/*location.href = `myclass.html`;*/
		    });
		});
	});
});


