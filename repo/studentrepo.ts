import { StudentSchema } from '../schema/student';
import { ISTUDENT,class1 } from '../document/student';
export class MainStudent {
  constructor() {}
  getstudent(_id: string) {
    return StudentSchema.findById(_id);
  }
  savestudent(student: ISTUDENT) {
    return new StudentSchema(student).save();
  }
  updatestudent(student: ISTUDENT) {
    return StudentSchema.findByIdAndUpdate(student._id, student, {
      new: true
    });
  }
  deletstudent(_id: string) {
    return StudentSchema.findByIdAndDelete(_id);
  }
  getstudentslist() {
   return StudentSchema.find();
  }
  
}