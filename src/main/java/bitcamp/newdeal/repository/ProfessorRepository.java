package bitcamp.newdeal.repository;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Professor;

public interface ProfessorRepository {
    
    List<Lecture> findLectureByProfessorNo(int pNum);
    
    Professor selectOne (int pNum);
    
    int insert (Professor professor);
    
    int update (Professor professor);
    
}
