package bitcamp.newdeal.repository;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;

public interface LectureRepository {

    List<Lecture> selectList();
    
    Lecture selectOne(int lNum);
    
    int insert (Lecture lecture);
    
    int update (Lecture lecture);
    
    int delete (int lnum);
}
