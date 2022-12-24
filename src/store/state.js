export default {
  token: "",
  students: [
    { id: 1, name: "Adriana", level: "básico" },
    { id: 2, name: "John", level: "avanzado" },
  ],
  findStudent(studentId){
    return this.students_list[this.findStudent(studentId)];
  }

};
