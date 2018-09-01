package bitcamp.newdeal.web.json;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Professor;
import bitcamp.newdeal.domain.Student;
import bitcamp.newdeal.service.LectureService;
import bitcamp.newdeal.service.ProfessorService;

@RestController
@RequestMapping("/lecture")
public class LectureController {

    @Autowired
    LectureService lectureService;
    @Autowired
    ProfessorService professorService;

    @Autowired
    ServletContext sc;
    
    @GetMapping("totalpage")
    public Object totalPage() {
        return lectureService.getTotalPage();
    }

    @GetMapping("list")
    public Object list(int page, HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();

        if (session.getAttribute("loginStudent") != null) {
            Student loginStudent = (Student) session.getAttribute("loginStudent");
            result.put("loginStudent", loginStudent);
        } else if (session.getAttribute("loginProfessor") != null) {
            System.out.println("있음");
            Professor loginProfessor = (Professor) session.getAttribute("loginProfessor");
            result.put("loginProfessor", loginProfessor);
        }
        
        int start = (page-1) * 10;

        List<Lecture> list = lectureService.list(start);
        System.out.println(list);

        result.put("status", "success");
        result.put("list", list);
        return result;
    }

    @GetMapping("myList")
    public Object myList(HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();

        Professor loginProfessor = (Professor) session.getAttribute("loginProfessor");

        List<Lecture> mylist = lectureService.mylist(loginProfessor.getpNum());

        result.put("status", "success");
        result.put("myList", mylist);
        return result;

    }

    @RequestMapping(value = "view")
    public Object lectureView(int lNum, int pNum) {
        HashMap<String, Object> result = new HashMap<>();

        Lecture lecture = lectureService.get(lNum);
        String pname = professorService.getPname(pNum);

        result.put("list", lecture);
        result.put("pname", pname);

        return result;
    }

    @GetMapping("listsearch")
    public Object listSearch(String keyword, HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        
        if (session.getAttribute("loginStudent") != null) {
            Student loginStudent = (Student) session.getAttribute("loginStudent");
            result.put("loginStudent", loginStudent);
        } else if (session.getAttribute("loginProfessor") != null) {
            System.out.println("있음");
            Professor loginProfessor = (Professor) session.getAttribute("loginProfessor");
            result.put("loginProfessor", loginProfessor);
        }

        List<Lecture> list = lectureService.listSearch(keyword);

        System.out.println(list.get(0).toString());
        result.put("status", "success");
        result.put("list", list);
        return result;
    }

    @RequestMapping("insert")
    public Object insert(MultipartFile file) {
        System.out.println("=============start insert controller..");

        String newfilename = UUID.randomUUID().toString();
        String path = sc.getRealPath("/files/" + newfilename);

        try {
            file.transferTo(new File(path));
        } catch (Exception e) {
            e.printStackTrace();
        }

        HashMap<String, Object> result = new HashMap<>();
        result.put("newfilename", newfilename);

        return result;
    }

    @RequestMapping("add")
    public Object insert(Lecture lecture) {
        System.out.println("=============start add controller..");
        
        
        HashMap<String, Object> result = new HashMap<>();
        lectureService.add(lecture);
        result.put("status", "success");
        return result;
    }

    @RequestMapping("update")
    public Object update(Lecture lecture) {
        System.out.println("=============start update controller..");

        HashMap<String, Object> result = new HashMap<>();
        lectureService.update(lecture);
        result.put("status", "success");
        return result;
    }

    @RequestMapping("delete")
    public Object delete(int lectureNo) {
        System.out.println("=============start delete controller..");

        HashMap<String, Object> result = new HashMap<>();
        lectureService.delete(lectureNo);
        result.put("status", "success");
        return "redirect:myList";
    }

}
