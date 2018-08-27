'use strict'

let tbody = $('#eListTable > tbody'); 
let data = null;


$(function loadList(){
	console.log('로드됨!');
	$.getJSON(`${serverApiAddr}/json/lecture/list`,{	
	}).done(function(result){
		console.log(result.status);
		console.log(result.list);
		data = result;
		tbody.html('');
		if(data.loginProfessor==null){
			var sname = data.loginStudent.studentName;
			$("#userName").html(`<p>${sname}님 반갑습니다</p>`);
		}else{
			var pname = data.loginProfessor.professorName; 
			
			$("#userName").html(`<p>${pname}님 반갑습니다</p>
			<button type="button" class="btn btn-success btn-sm" 
			onclick="location.href='../Professor/mylecture.html'">나의강의실</button>
			`);
		};

		for(var item of data.list){
			$("<tr>").html(` <th scope="row">${item.lectureNo}</th>
                        <td>${item.lectureSubject}</td>
                        <td><a href="lectureinfo.html" data-no="${item.lectureNo}" class="viewLink">${item.lectureName}</a></td>
                        <td>${item.lectureRoom}</td>
                        <td>Gregory Mankiw</td>
                        <td>${item.lectureStartDay}</td>
                        <td>${item.lectureEndDay}</td>
                        <td>${item.lectureMember}/${item.lectureMaxMember}</td>
                        <td><button type="button">신청</button>`).appendTo(tbody);
		}
	});
});


tbody.on('click', 'a.viewLink', function(event) {
    event.preventDefault();
    var lNum = $(event.target).attr('data-no');
    location.href = `lectureinfo.html?lNum=${lNum}`;
});