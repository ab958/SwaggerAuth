import express from 'express';
import { TeacherController } from '../controller/teacher.con';
import { ITEACHER } from '../document/teacher';
import { DeleteTEACHER, GetTEACHER, SaveReqTEACHER, UpdateReqTEACHER,loginteacher } from '../reqType/TeacherRequest';
import { SaveUpdateResTeacher,Tokken } from '../resType/resType';
import { TeacherSchema } from '../schema/teacher';
import CustomeError from '../error';
import jwt from "jsonwebtoken";
// const jwt = require("jsonwebtoken");

export class TeacherRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/getTeacher', async (req, res, next) => {
      try {
        const getreq:GetTEACHER = req.body;
          const admin:SaveUpdateResTeacher = await new TeacherController().getteacher(getreq);
          res.send(admin);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/saveteacher', async (req, res, next) => {
      try {
        const admin: SaveReqTEACHER = req.body;
        const newAdmin:SaveUpdateResTeacher = await new TeacherController().saveteacher(admin);
        res.status(200).json({
          message: newAdmin
        });
      } catch (error) {
        next(error);
      }
    });

    //  

    this.router.post('/loginteacher', async (req, res, next) => {
      try {
        const admin: loginteacher = req.body;
        const log:Tokken = await new TeacherController().loginteacher(admin);
        res.status(200).json({
          Tokken : log
        });
      } catch (error) {
        next(error);
      }
    });

    // this.router.post("/loginteacher",async(req,res)=>{
    //   try{
    //     const teacter ={
    //       FirstName : req.body.FirstName,
    //       // age : req.body.age
    //     }
    //     const Teach:any = await TeacherSchema.findOne(teacter);
    //     const token = jwt.sign({_id :Teach._id},"WAHAB")
    //     res.header("token",token)
    //     res.send(token)
    //   }catch(e){

    //   }
    // })
    this.router.put('/updateTeacher', async (req, res, next) => {
      try {
        const admin: UpdateReqTEACHER = req.body;
        const upadated_admin:SaveUpdateResTeacher = await new TeacherController().updateteacher(admin);
        const response = {
          upadated_admin,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deleteTeacher', async (req, res, next) => {
      try {
        const delreq:DeleteTEACHER = req.body;
        const Deleted_admin = await new TeacherController().deletteacher(delreq);
        res.status(200).json({
          message: 'admin deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getTeacherlist',waha, async (req, res, next) => {
      try {
        const adminList: SaveUpdateResTeacher[] = await new TeacherController().getteacherList();
        res.status(200).json({
          result: adminList
        });

      } catch (error) {
        next(error);
      }
    });
  }
}
export const TeacherRoutesApi = new TeacherRoutes().router;


function waha(req:express.Request ,res : express.Response,next: express.NextFunction){
  const token:any = req.header('token');
  if(!token){
    res.send("Access Deniad")
  }
  try{
    const vei = jwt.verify(token,"WAHAB")
    // req.token = vei
    next()
  }catch(e){
    res.send("invalid Token")
  }

}