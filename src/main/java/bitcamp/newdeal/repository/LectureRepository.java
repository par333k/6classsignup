package bitcamp.newdeal.repository;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;

public interface LectureRepository {

    List<Lecture> lectureList(int start);
    
    Lecture selectOne(int lNum);
    
    int insert (Lecture lecture);
    
    int update (Lecture lecture);

    List<Lecture> myLectureList(int pNum);

    int delete (int lectureNo);

    List<Lecture> lectureListSearch(String keyword);

    int getTotalPage();
    
    

}
