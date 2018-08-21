package bitcamp.newdeal.domain;

import java.sql.Timestamp;
import java.util.Date;

public class Lecture {
    private int lectureNo;
    private String lectureName;
    private String lectureSubject;
    private String lectureContent;
    private String lectureRoom;
    private String lectureFile;
    private int lectureMaxMember;
    private String lectureAble;
    private Date lectureStartDay;
    private Date lectureEndDay;
    private Timestamp lectureTime;
    
    @Override
    public String toString() {
        return "lecture [lectureNo=" + lectureNo + ", lectureName=" + lectureName + ", lectureSubject=" + lectureSubject
                + ", lectureContent=" + lectureContent + ", lectureRoom=" + lectureRoom + ", lectureFile=" + lectureFile
                + ", lectureMaxMember=" + lectureMaxMember + ", lectureAble=" + lectureAble + ", lectureStartDay="
                + lectureStartDay + ", lectureEndDay=" + lectureEndDay + ", lectureTime=" + lectureTime + "]";
    }
    
    public int getLectureNo() {
        return lectureNo;
    }
    public void setLectureNo(int lectureNo) {
        this.lectureNo = lectureNo;
    }
    public String getLectureName() {
        return lectureName;
    }
    public void setLectureName(String lectureName) {
        this.lectureName = lectureName;
    }
    public String getLectureSubject() {
        return lectureSubject;
    }
    public void setLectureSubject(String lectureSubject) {
        this.lectureSubject = lectureSubject;
    }
    public String getLectureContent() {
        return lectureContent;
    }
    public void setLectureContent(String lectureContent) {
        this.lectureContent = lectureContent;
    }
    public String getLectureRoom() {
        return lectureRoom;
    }
    public void setLectureRoom(String lectureRoom) {
        this.lectureRoom = lectureRoom;
    }
    public String getLectureFile() {
        return lectureFile;
    }
    public void setLectureFile(String lectureFile) {
        this.lectureFile = lectureFile;
    }
    public int getLectureMaxMember() {
        return lectureMaxMember;
    }
    public void setLectureMaxMember(int lectureMaxMember) {
        this.lectureMaxMember = lectureMaxMember;
    }
    public String getLectureAble() {
        return lectureAble;
    }
    public void setLectureAble(String lectureAble) {
        this.lectureAble = lectureAble;
    }
    public Date getLectureStartDay() {
        return lectureStartDay;
    }
    public void setLectureStartDay(Date lectureStartDay) {
        this.lectureStartDay = lectureStartDay;
    }
    public Date getLectureEndDay() {
        return lectureEndDay;
    }
    public void setLectureEndDay(Date lectureEndDay) {
        this.lectureEndDay = lectureEndDay;
    }
    public Timestamp getLectureTime() {
        return lectureTime;
    }
    public void setLectureTime(Timestamp lectureTime) {
        this.lectureTime = lectureTime;
    }
   
    
}
