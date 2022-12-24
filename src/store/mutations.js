export default {
  ADD_STUDENT(state, student) {
    state.students_list.push({
      id: Math.random().toString().split(".")[1],
      name: student.name,
      level: student.level,
    });
  },
  DELETE_STUDENT(state, id) {
    // state.students_list.splice(id, 1)
    // const index = state.students_list.findIndex(student => student.id === id);
    // state.students_list.splice(index,1)
    console.log(state, id);

  },
  UPDATE_STUDENT(state, payload) {
    state.students_list[state.findStudent(payload.id)] = payload;
  },
  TOKEN(state, status) {
    state.token = status;
  },
};
