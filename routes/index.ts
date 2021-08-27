import express from 'express';
import { StudentRoutesApi } from "./student.route";
import { TeacherRoutesApi } from "./teacher.route";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/student',StudentRoutesApi);
        this.router.use('/teacher',TeacherRoutesApi);

    }


}
export const MainApi = new MainRouter().router;