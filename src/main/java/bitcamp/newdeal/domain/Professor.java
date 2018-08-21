package bitcamp.newdeal.domain;

public class Professor {
    private int pNum;
    private int professorNo;
    private String professorName;
    private String professorPwd;
    private String professorMajor;
    private String professorTel;
    private String professorEmail;
    private String professorClassAble;
    
    

    @Override
    public String toString() {
        return "Professor [pNum=" + pNum + ", professorNo=" + professorNo + ", professorName=" + professorName
                + ", professorPwd=" + professorPwd + ", professorMajor=" + professorMajor + ", professorTel="
                + professorTel + ", professorEmail=" + professorEmail + ", professorClassAble=" + professorClassAble
                + "]";
    }
    
    public int getpNum() {
        return pNum;
    }
    public void setpNum(int pNum) {
        this.pNum = pNum;
    }
    public int getProfessorNo() {
        return professorNo;
    }
    public void setProfessorNo(int professorNo) {
        this.professorNo = professorNo;
    }
    public String getProfessorName() {
        return professorName;
    }
    public void setProfessorName(String professorName) {
        this.professorName = professorName;
    }
    public String getProfessorPwd() {
        return professorPwd;
    }
    public void setProfessorPwd(String professorPwd) {
        this.professorPwd = professorPwd;
    }
    public String getProfessorMajor() {
        return professorMajor;
    }
    public void setProfessorMajor(String professorMajor) {
        this.professorMajor = professorMajor;
    }
    public String getProfessorTel() {
        return professorTel;
    }
    public void setProfessorTel(String professorTel) {
        this.professorTel = professorTel;
    }
    public String getProfessorEmail() {
        return professorEmail;
    }
    public void setProfessorEmail(String professorEmail) {
        this.professorEmail = professorEmail;
    }
    public String getProfessorClassAble() {
        return professorClassAble;
    }
    public void setProfessorClassAble(String professorClassAble) {
        this.professorClassAble = professorClassAble;
    }
    
    
    
}
