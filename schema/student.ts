import { Schema, model } from 'mongoose';
import { ISTUDENT } from '../document/student';
const IStudentSchema = new Schema(
  {
    FirstName: { type: String },
    LastName: { type: String },
    class: { type: String },
    age: { type: Number },
    // JoinDate: { type: String },
    // adress: { type: String },
  },
  { timestamps: true }
);
export const StudentSchema = model<ISTUDENT>('StudentSchema', IStudentSchema);