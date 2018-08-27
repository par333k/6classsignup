package bitcamp.newdeal.repository;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;

public interface LectureRepository {

    List<Lecture> lectureList();
    
    Lecture selectOne(int lNum);
    
    int insert (Lecture lecture);
    
    int update (Lecture lecture);

    List<Lecture> myLectureList(int pNum);

    int delete (int lectureNo);

}
