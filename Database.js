
class Student {
    constructor(id,name,gpa, cours=[]) {
        this.id = id
		this.name = name
        this.gpa = gpa
        this.course = cours
    }

   
}

class Course {
    constructor(name,time,date, rooms=[]) {
		this.name = name		
        this.date = date
        this.time = time
        this.rooms = rooms
    }

}

class Database{ //tüm dosya okuma ile ilgili olanları buraya aldım.
	
 readStudentsData(file) {
    console.log("readData "+file);
    fetch(url+file)
        .then(r => r.text(), report)
        .then(db.addStudents, report);
		
}
 readCoursesData(file) {
    console.log("readData "+file);
    fetch(url+file)
        .then(r => r.text(), report)
		.then(db.addCourses, report);
}

 parseStudent(line) {
    let b = line.split("\t");
    let id = b[0], name = b[1], gpa = b[2];
    var courseList = [];
    for (var i=3; i<b.length; i++) 
        courseList.push(b[i]);
    return new Student(id, name, gpa, courseList);
}
addStudents(txt) {
    let a = txt.split("\n");
    for (var i=0;i<a.length;i++) {
      let std = db.parseStudent(a[i]);
      students.set(i,std);
    }
}
 parseCourse(line) {
    let b = line.split("\t");
    let name = b[0], time = b[1], date = b[2];
    var courseList = [];
    for (var i=3; i<b.length; i++) 
        courseList.push(b[i]);
	
    return new Course(name,time, date,courseList);
}
addCourses(txt) {
    let a = txt.split("\n");
    for (var i=0;i<a.length;i++) {
      let course = db.parseCourse(a[i]);
      courses.set(i,course);
    }
}

}
