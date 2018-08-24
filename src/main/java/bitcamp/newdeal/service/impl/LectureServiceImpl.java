package bitcamp.newdeal.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.repository.LectureRepository;
import bitcamp.newdeal.service.LectureService;

@Service
public class LectureServiceImpl implements LectureService {

    @Autowired LectureRepository lectureRepository;
    
    @Override
    public List<Lecture> list() {
        
        return lectureRepository.lectureList();
    }

    @Override
    public Lecture get(int lNum) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public int add(Lecture lecture) {
        
        return lectureRepository.insert(lecture);
    }

    @Override
    public int update(Lecture lecture) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int delete(int lNum) {
        // TODO Auto-generated method stub
        return 0;
    }

}
