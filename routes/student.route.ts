import express from 'express';
import { StudentController } from '../controller/student.con';
import { ISTUDENT } from '../document/student';
import { DeleteSTUDENT, GetSTUDENT, SaveReqSTUDENT, UpdateReqSTUDENT } from '../reqType/studentRequest';
import { SaveUpdateResStudent } from '../resType/resType';
import CustomeError from '../error';

export class studentRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/getstudent', async (req, res, next) => {
      try {
        const getreq:GetSTUDENT = req.body;
          const student:SaveUpdateResStudent = await new StudentController().getstudent(getreq);
          res.send(student);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/savestudent', async (req, res, next) => {
      try {
        const student1: SaveReqSTUDENT = req.body;
        const student:SaveUpdateResStudent = await new StudentController().savestudent(student1);
        res.status(200).json({
          message: student
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.put('/updatestudent', async (req, res, next) => {
      try {
        const student1: UpdateReqSTUDENT = req.body;
        const upadated_student:SaveUpdateResStudent = await new StudentController().updatestudent(student1);
        const response = {
          upadated_student,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deletestudent', async (req, res, next) => {
      try {
        const delreq:DeleteSTUDENT = req.body;
        const Deleted_student = await new StudentController().deletstudent(delreq);
        res.status(200).json({
          message: 'admin deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getstudentlist', async (req, res, next) => {
      try {
        const studentList: SaveUpdateResStudent[] = await new StudentController().getstudentList();
        res.status(200).json({
          result: studentList
        });

      } catch (error) {
        next(error);
      }
    });
  }
}
export const StudentRoutesApi = new studentRoutes().router;