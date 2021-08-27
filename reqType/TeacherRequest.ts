export interface SaveReqTEACHER{
    FirstName: string;
    LastName: string;
    qualification: string;
    age: number;
    // JoinDate: string;
    // adress: string;
  }
  export interface UpdateReqTEACHER {
    _id: string;
    FirstName: string;
    LastName: string;
    qualification: string;
    age: number;
    // JoinDate: string;
    // adress: string;
  }
  export interface GetTEACHER {
    id: string
  }
  export interface DeleteTEACHER {
    id: string
  }
  export interface loginteacher{
    FirstName : string
  }