import { Document } from 'mongoose';
export interface ISTUDENT extends Document {
    _id:string;
    FirstName: string;
    LastName: string;
    class : string;
    age: number;
  //   JoinDate: string;
  //   adress: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface class1{
  class: number
}
