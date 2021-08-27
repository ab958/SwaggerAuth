import { TeacherSchema } from '../schema/teacher';
import { ITEACHER,loginteacher1 } from '../document/teacher';
export class MainTeacher {
  constructor() {}
  getteacher(_id: string) {
    return TeacherSchema.findById(_id);
  }
  saveteacher(teacher: ITEACHER) {
    return new TeacherSchema(teacher).save();
  }
  updateteacher(teacher: ITEACHER) {
    return TeacherSchema.findByIdAndUpdate(teacher._id, teacher, {
      new: true
    });
  }
  deletteacher(_id: string) {
    return TeacherSchema.findByIdAndDelete(_id);
  }
  getteacherslist() {
   return TeacherSchema.find();
  }
  loginteacher(loginteacher:loginteacher1){
    return TeacherSchema.findOne(loginteacher)
  }
}