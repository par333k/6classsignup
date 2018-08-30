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
    public List<Lecture> list(int start) {
        
        return lectureRepository.lectureList(start);
    }

    @Override
    public Lecture get(int lNum) {
        
        return lectureRepository.selectOne(lNum);
    }
    @Override
    public int add(Lecture lecture) {
        
        return lectureRepository.insert(lecture);
    }

    @Override
    public int update(Lecture lecture) {
    	
        System.out.println(lecture.getLectureRoom());
    	return lectureRepository.update(lecture);
    }

    @Override
    public int delete(int lectureNo) {
    	
    	return lectureRepository.delete(lectureNo);
    }

    @Override
    public List<Lecture> mylist(int pNum) {
        
        return lectureRepository.myLectureList(pNum);
    }

    @Override
    public List<Lecture> listSearch(String keyword) {
        return lectureRepository.lectureListSearch(keyword);
    }

    @Override
    public int getTotalPage() {
        return lectureRepository.getTotalPage()/10 + 1;
    }
    

}
