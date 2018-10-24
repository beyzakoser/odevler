class Student{
 constructor (id,name,gpa,courses){
this.id=id;
this.name=name;
this.gpa=gpa;
this.courses=courses;

 }
toString(){
return "isim"+ this.name+" id "+this.id+"gpa "+this.gpa+"courses "+this.cources;
}
}
class Course{
constructor(name, time, date, rooms){
this.name=name;
this.time=time;
this.date=date;
this.rooms=rooms;

}
toString(){
return "isim"+ this.name+" time "+this.time+"date "+this.date+"rooms "+this.rooms;
}
}



