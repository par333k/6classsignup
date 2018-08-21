package bitcamp.newdeal.repository;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Student;

public interface StudentRepository {

    List<Lecture> findLectureByStudentNo(int sNum);
    
    Student selectOne (int sNum);
    
    int insert (Student student);
    
    int update (Student student);
    
}
