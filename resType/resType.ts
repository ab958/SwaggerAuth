export interface SaveUpdateResStudent {
    _id:string;
    FirstName: string;
    LastName: string;
    class: string;
    age: number;
    // JoinDate: string;
    // adress: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface SaveUpdateResTeacher {
    _id:string;
    FirstName: string;
    LastName: string;
    qualification: string;
    age: number;
    // JoinDate: string;
    // adress: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface Tokken{
    token : any
  }