"use strict"

let tbody = $('#eListTable > tbody'); 
let data = null;
var values = location.href.split("?")[1];
for(var param of values){
	var lNum = param.split("=");
	console.log(lNum[0])
}


$(function loadList(){
	console.log('로드됨!');
	$.getJSON(`${serverApiAddr}/json/lecture/view?lNum=${lNum}`,{	
	}).done(function(result){
		console.log(result.list);
		data = result;
		tbody.html('');
		$("<tr>").html(`<th scope="row">${data.list.lectureNo}</th>
                        <td>${data.list.lectureSubject}</td>
                        <td>${data.list.lectureName}</td>
                        <td>${data.list.lectureRoom}</td>
                        <td>Gregory Mankiw</td>
                        <td>${data.list.lectureStartDay}</td>
                        <td>${data.list.lectureEndDay}</td>
                        <td>${data.list.lectureMember}/${data.list.lectureMaxMember}</td>
                        <td><button type="button">신청</button>`).appendTo(tbody);

		$("#content").html(`<h2 class="blog-post-title">강의 상세 내역</h2>
				<p class="blog-post-meta">
				<a href="#">엄진영</a>
				</p>
				<p>강의 내용에는 변경사항이 있으니 자세한 문의는 조교실(02-222-2222)로 연락하거나 메일로 문의 바랍니다</p>
				<pre>${data.list.lectureContent}</pre>`);
	});
});


