import { Document } from 'mongoose';
export interface ITEACHER extends Document {
  _id:string;
  FirstName: string;
  LastName: string;
  qualification : string;
  age: number;
//   JoinDate: string;
//   adress: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface loginteacher1 {
  FirstName : string
}