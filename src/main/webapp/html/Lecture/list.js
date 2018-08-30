'use strict'

let tbody = $('#eListTable > tbody');
let data = null;
let page = 1;
let totalpage = 10;

$.getJSON(`${serverApiAddr}/json/lecture/totalpage`, {}).done(function (result) {
	console.log(result);
	totalpage = result;
});

function loadList() {
	console.log('로드됨!');
	$.getJSON(`${serverApiAddr}/json/lecture/list`, {
		'page': page
	}).done(function (result) {
		console.log(result.status);
		console.log(result.list);
		data = result;
		tbody.html('');
		if (data.loginProfessor == null) {
			var sname = data.loginStudent.studentName;
			$("#userName").html(`${sname}님 반갑습니다
			<button type="button" class="btn btn-success btn-sm" 
			onclick="location.href='../Student/myclass.html'">나의강의실</button>
			`);
		} else {
			var pname = data.loginProfessor.professorName;

			$("#userName").html(`${pname}님 반갑습니다
			<button type="button" class="btn btn-success btn-sm" 
			onclick="location.href='../Professor/mylecture.html'">나의강의실</button>
			`);
		};
		console.log(data.list);
		if (userDiv == 'professor') {
			for (var item of data.list) {
				console.log(item);
				$("<tr>").html(` <th scope="row">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td></td>`).appendTo(tbody);
			}
		} else {
			for (var item of data.list) {
				console.log(item);
				$("<tr>").html(` <th scope="row">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td><button type="button">신청</button></td>`).appendTo(tbody);
			}
		}
	});
}

loadList();

$('#nextPage').click(function () {
	if (page >= totalpage) return;
	page++;
	loadList();
});

$('#prevPage').click(function () {
	if (page <= 1) return;
	page--;
	loadList();
});

tbody.on('click', 'a.viewLink', function (event) {
	event.preventDefault();
	var lNum = $(event.target).attr('data-no');
	var pNum = $(event.target).attr('data-no2');
	location.href = `lectureinfo.html?lNum=${lNum}&pNum=${pNum}`;
});

$("#searchBtn").click(function () {
	page = 1;
	tbody.html('');
	$.getJSON(`${serverApiAddr}/json/lecture/listsearch`, {
		'keyword': $('#search-input').val()
	}).done(function (result) {
		console.log(result.status);
		console.log(result.list);
		data = result;
		console.log(data.list);
		totalpage = 1;
		if (userDiv == 'professor') {
			for (var item of data.list) {
				console.log(item);
				$("<tr>").html(` <th scope="row">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td></td>`).appendTo(tbody);
			}
		} else {
			for (var item of data.list) {
				console.log(item);
				$("<tr>").html(` <th scope="row">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td><button type="button">신청</button></td>`).appendTo(tbody);
			}
		}
		tbody.on('click', '#apply', function(event) {
		    event.preventDefault();
		    $.getJSON(`${serverApiAddr}/json/lecture/apply?lectureNo=${item.lectureNo}`,
		    		function(result){
		    	if(result.status == 'success'){
		    		alert('신청성공')
		    		location.href = `list.html`;
		    	}
	});
});