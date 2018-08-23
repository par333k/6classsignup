package bitcamp.newdeal.web.json;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.newdeal.domain.Professor;
import bitcamp.newdeal.service.ProfessorService;

@RestController
@RequestMapping("/professor")
public class ProfessorController {

    @Autowired ProfessorService professorService;
    
    @PostMapping("plogin")
    public Object plogin(int professorNo, String professorPwd, HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        try {
            Professor loginProfessor = professorService.get(professorNo, professorPwd);
            
            if(loginProfessor == null)
                throw new Exception("로그인실패!");
            
            session.setAttribute("loginProfessor", loginProfessor);
            result.put("status", "success");
            
        } catch (Exception e) {
            result.put("status", "fail");
            result.put("message", e.getMessage());
        }
        
        return result;
    }
}
