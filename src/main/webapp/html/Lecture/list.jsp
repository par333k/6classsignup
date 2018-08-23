<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="conPath" value="${pageContext.request.contextPath }"/>
<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>강의목록</title>
    <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/common.css">
</head>
<body>
<div class="container">
        <div class="float-left">
            ${loginProfessor.professorName} 님 반갑습니다.
            <button type="button" class="btn btn-success btn-sm">나의강의실</button>
        </div>
        <div class="float-right">
            <button type="button" class="btn btn-secondary btn-sm">로그아웃</button>
        </div>
        <br>
        <div class="pagetitle">
            <h2>강의목록</h2>
        </div>
        <div class="list-container logpad">
            <table class="table table-hover">
                <thead>
                    <tr class="table-active">
                        <th scope="col">#</th>
                        <th scope="col">과목번호</th>
                        <th scope="col">이수구분</th>
                        <th scope="col">개설학과</th>
                        <th scope="col">강의제목</th>
                        <th scope="col">강의시간</th>
                        <th scope="col">담당교수</th>
                        <th scope="col">학점</th>
                        <th scope="col">학년</th>
                        <th scope="col">신청현황</th>
                        <th scope="col">수강신청</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>0012B</td>
                        <td>전공필수</td>
                        <td>경제학과</td>
                        <td>경제학원론</td>
                        <td>수2,3(B503)</td>
                        <td>Gregory Mankiw</td>
                        <td>3</td>
                        <td>1</td>
                        <td>13/30</td>
                        <td>
                            <button type="button" class="btn btn-primary btn-sm">신청</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>0013B</td>
                        <td>전공필수</td>
                        <td>경제학과</td>
                        <td>경제사</td>
                        <td>월1,2(C102)</td>
                        <td>Adam Smith</td>
                        <td>3</td>
                        <td>1</td>
                        <td>21/30</td>
                        <td>
                            <button type="button" class="btn btn-primary btn-sm">신청</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="pagetitle">
            <div class="input-group col-md-4 search-container">
                <input class="form-control py-2" type="search" id="search-input">
                <span class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">검색</button>
                </span>
            </div>
        </div>

            <nav aria-label="Page navigation">
                <ul class="pagination col-md-2" style="margin: auto;">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">&laquo;</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="#">2
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">&raquo;</a>
                    </li>
                </ul>
            </nav>
    </div>
    <script src="../../node_modules/jquery/dist/jquery.min.js"></script>
    <script src="../../node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>