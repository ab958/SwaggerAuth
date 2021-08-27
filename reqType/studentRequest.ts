export interface SaveReqSTUDENT{
    FirstName: string;
    LastName: string;
    class: string;
    age: number;
    // JoinDate: string;
    // adress: string;
  }
  export interface UpdateReqSTUDENT {
    _id: string;
    FirstName: string;
    LastName: string;
    class: string;
    age: number;
    // JoinDate: string;
    // adress: string;
  }
  export interface GetSTUDENT {
    id: string
  }
  export interface DeleteSTUDENT {
    id: string
  }