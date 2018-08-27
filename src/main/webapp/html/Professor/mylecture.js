'use strict'

let tbody = $('#eListTable > tbody'); 
let data = null;


$(function loadList(){
	console.log('로드됨!');
	$.getJSON(`${serverApiAddr}/json/lecture/myList`,{	
	}).done(function(result){
		console.log(result.status);
		console.log(result.myList);
		data = result;
		tbody.html('');
		for(var item of data.myList){
			$("<tr>").html(` <th scope="row">${item.lectureNo}</th>
                        <td>${item.lectureSubject}</td>
                        <td>${item.lectureName}</td>
                        <td>${item.lectureRoom}</td>
                        <td>aaa</td>
                        <td>${item.lectureStartDay}</td>
                        <td>${item.lectureEndDay}</td>
                        <td>${item.lectureMember}/${item.lectureMaxMember}</td>
                        <td><button type="button">폐강하기</button>`).appendTo(tbody);
		}
	})
});
