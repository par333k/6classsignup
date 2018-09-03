'use strict'

let tbody = $('#eListTable > tbody');
let data = null;
let page = 1;
let totalpage = 10;
let apply = null;

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
			var sNum = data.loginStudent.sNum;
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
							<td><button type="button">폐강</button></td>`).appendTo(tbody);
			}
		} else {
			for (var item of data.list) {
				console.log(item);
				if(`${item.lectureMember}`==`${item.lectureMaxMember}`){
					$("<tr>").html(` <th scope="row" id="lno">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td>정원초과</td>`).appendTo(tbody);
					}else{
				$("<tr>").html(` <th scope="row" id="lno">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td><button type="button" id="apply" data-no3="${item.lectureNo}">신청</button></td>`).appendTo(tbody);
					}
			}
			tbody.on('click', '#apply', function(event) {
			    event.preventDefault();
			      var lNum = $(event.target).attr('data-no3');
			      console.log(lNum);
			      var now = new Date();
			      var year= now.getFullYear();
			      var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
			      var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();   
			      var chan_val = year + '-' + mon + '-' + day;
			      $(this).val(chan_val);
			    $.getJSON(`${serverApiAddr}/json/apply/myApplyList`,{	
			  	}).done(function(resultApplyList){
			  		if(resultApplyList.status == "newApply"){
			  			$.ajax('../../json/studentlist/applyAdd', {
		 	                method: 'POST',
		 	                dataType: 'json',
		 	                data: {
		 	                    sNum: sNum,
		 	                    lectureNo: lNum,
		 	                    applyDay: chan_val,
		 	                    applyConfirm: 1
		 	                },
		 	                success: function (data) {
		 	                    if (!data.err) {
		 	                        swal("성공입니다!");
		 	                        $.getJSON(`${serverApiAddr}/json/studentlist/applyUpdate?lectureNo=${lNum}`,
		 	            		    		function(result){
		 	            		    	if(result.status == 'success'){
		 	            		    		location.href = '../Student/myclass.html';
		 	            		    	}
		 	            		    });
		 	                    } else {
		 	                        swal("오류발생",
		 	                            "알 수 없는 원인에 의해 오류가 발생 했습니다. 잠시 후 다시 시도해주세요. 오류가 지속된다면 고객지원센터로 문의 바랍니다."
		 	                        );
		 	                        console.log(data.error);
		 	                    }
		 	                }
		 	            });//ajax add
			  		}
			  		apply = resultApplyList;
			  		console.log(apply);
			  		for(var itemNo of apply.myApplyList){
			  			console.log(itemNo);
			  			if(`${itemNo.lectureNo}` == lNum){
			  				swal("이미 신청한 강의입니다!")
			  				break;
			  			}else{
			  				 $.ajax('../../json/studentlist/applyAdd', {
			 	                method: 'POST',
			 	                dataType: 'json',
			 	                data: {
			 	                    sNum: sNum,
			 	                    lectureNo: lNum,
			 	                    applyDay: chan_val,
			 	                    applyConfirm: 1
			 	                },
			 	                success: function (data) {
			 	                    if (!data.err) {
			 	                        swal("성공입니다!");
			 	                        $.getJSON(`${serverApiAddr}/json/studentlist/applyUpdate?lectureNo=${lNum}`,
			 	            		    		function(result){
			 	            		    	if(result.status == 'success'){
			 	            		    		location.href = '../Student/myclass.html';
			 	            		    	}
			 	            		    });
			 	                    } else {
			 	                        swal("오류발생",
			 	                            "알 수 없는 원인에 의해 오류가 발생 했습니다. 잠시 후 다시 시도해주세요. 오류가 지속된다면 고객지원센터로 문의 바랍니다."
			 	                        );
			 	                        console.log(data.error);
			 	                    }
			 	                }
			 	            });//ajax add
			  			}//if
			  		}//for
			  	});//function(result) 
			});
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
		var sNum = data.loginStudent.sNum;
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
				if(`${item.lectureMember}`==`${item.lectureMaxMember}`){
					$("<tr>").html(` <th scope="row" id="lno">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td>정원초과</td>`).appendTo(tbody);
					}else{
				$("<tr>").html(` <th scope="row" id="lno">${item.lectureNo}</th>
							<td>${item.lectureSubject}</td>
							<td><a href="lectureinfo.html" data-no="${item.lectureNo}" data-no2="${item.pNum}" class="viewLink">${item.lectureName}</a></td>
							<td>${item.lectureRoom}</td>
							<td>${item.lectureStartDay}</td>
							<td>${item.lectureEndDay}</td>
							<td>${item.lectureMember}/${item.lectureMaxMember}</td>
							<td><button type="button" id="apply" data-no3="${item.lectureNo}">신청</button></td>`).appendTo(tbody);
					}
			}
			tbody.on('click', '#apply', function(event) {
			    event.preventDefault();
			      var lNum = $(event.target).attr('data-no3');
			      var now = new Date();
			      var year= now.getFullYear();
			      var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
			      var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();   
			      var chan_val = year + '-' + mon + '-' + day;
			      $(this).val(chan_val);
			      $.getJSON(`${serverApiAddr}/json/apply/myApplyList`,{	
				  	}).done(function(resultApplyList){
				  		apply = resultApplyList;
				  		console.log(apply);
				  		for(var itemNo of apply.myApplyList){
				  			console.log(itemNo);
				  			if(`${itemNo.lectureNo}` == lNum){
				  				swal("이미 신청한 강의입니다!")
				  				break;
				  			}else{
				  				 $.ajax('../../json/studentlist/applyAdd', {
				 	                method: 'POST',
				 	                dataType: 'json',
				 	                data: {
				 	                    sNum: sNum,
				 	                    lectureNo: lNum,
				 	                    applyDay: chan_val,
				 	                    applyConfirm: 1
				 	                },
				 	                success: function (data) {
				 	                    if (!data.err) {
				 	                        swal("성공입니다!");
				 	                        $.getJSON(`${serverApiAddr}/json/studentlist/applyUpdate?lectureNo=${lNum}`,
				 	            		    		function(result){
				 	            		    	if(result.status == 'success'){
				 	            		    		location.href = '../Student/myclass.html';
				 	            		    	}
				 	            		    });
				 	                    } else {
				 	                        swal("오류발생",
				 	                            "알 수 없는 원인에 의해 오류가 발생 했습니다. 잠시 후 다시 시도해주세요. 오류가 지속된다면 고객지원센터로 문의 바랍니다."
				 	                        );
				 	                        console.log(data.error);
				 	                    }
				 	                }
				 	            });//ajax add
				  			}//if
				  		}//for
				  	});//function(result) 
			});
		}
	});
});