package bitcamp.newdeal.web.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Professor;
import bitcamp.newdeal.domain.Student;
import bitcamp.newdeal.service.LectureService;

@RestController
@RequestMapping("/lecture")
public class LectureController {

    @Autowired
    LectureService lectureService;

    @GetMapping("list")
    public Object list(HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        if (session.getAttribute("loginStudent") != null) {
            Student loginStudent = (Student) session.getAttribute("loginStudent");
            result.put("loginStudent", loginStudent);
        } else if (session.getAttribute("loginProfessor") != null) {
            System.out.println("있음");
            Professor loginProfessor = (Professor) session.getAttribute("loginProfessor");
            result.put("loginProfessor", loginProfessor);
        }

        List<Lecture> list = lectureService.list();

        result.put("status", "success");
        result.put("list", list);
        return result;
    }
}
