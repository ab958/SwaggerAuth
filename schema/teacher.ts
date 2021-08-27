import { Schema, model } from 'mongoose';
import { ITEACHER } from '../document/teacher';
const ITeacherSchema = new Schema(
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
export const TeacherSchema = model<ITEACHER>('TeacherSchema', ITeacherSchema);