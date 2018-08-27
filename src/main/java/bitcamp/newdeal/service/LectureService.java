package bitcamp.newdeal.service;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;

public interface LectureService {

    List<Lecture> list();
    
    Lecture get(int lNum);
    
    int add(Lecture lecture);
    
    int update(Lecture lecture);
    
    int delete(int lNum);

    List<Lecture> mylist(int pNum);

}
