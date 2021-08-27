import { ITEACHER } from '../document/teacher';
import { MainTeacher } from '../repo/teacherrepo';
import CustomeError from '../error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security,Header,Request } from "tsoa";
import { SaveUpdateResTeacher,Tokken } from '../resType/resType';
import { DeleteTEACHER, GetTEACHER, SaveReqTEACHER,UpdateReqTEACHER,loginteacher } from '../reqType/TeacherRequest';
import jwt from "jsonwebtoken";
@Route('teacher')
@Tags('teacher')
export class TeacherController {
  constructor() { }
  @Post("/getteacher")
  async getteacher(@Body() getreq:GetTEACHER): Promise<SaveUpdateResTeacher> {
    const teacher = await new MainTeacher().getteacher(getreq.id);
    if (teacher === null) throw new CustomeError(404, 'teacher not found');
    return <SaveUpdateResTeacher>teacher;
  }
  // login routes
  @Post("/loginteacher")

  async loginteacher(@Body() teach:loginteacher): Promise<Tokken> {
    let teacher:any= await new MainTeacher().loginteacher(teach);
    if(teacher){
      teacher = teacher._id
    }
    console.log(teacher,"yeh haijgiojg fdgdfgfd  fd gdf  ")
    if (teacher === null) throw new CustomeError(404, 'teacher not found');
    // return let wahab:any =<Tokken>teacher;
    const token:any = jwt.sign({_id :teacher},"WAHAB")
        // res.header("token",token)
        // res.send(token)
        console.log(token ,"Token")
    let wahab:any =<Tokken>token;
    console.log(wahab,"wahab")
    return wahab
  }
  // login rotes


  @Post('/saveteacher')
  async saveteacher(@Body() teacer: SaveReqTEACHER): Promise<SaveUpdateResTeacher> {
    const new_teacher:ITEACHER = await new MainTeacher().saveteacher(<ITEACHER>(teacer));
    return <SaveUpdateResTeacher>(new_teacher);
  }

  @Put('/updateteacher')
  async updateteacher(@Body() teacer: UpdateReqTEACHER): Promise<SaveUpdateResTeacher> {
    const update_teacher = await new MainTeacher().updateteacher(<ITEACHER>(teacer));
    if (update_teacher === null)
      throw new CustomeError(400, 'Admin not updated');
    return <SaveUpdateResTeacher>update_teacher;
  }

  // components:
  // parameters:
  // ...
  // responses:
  // ...

  // securitySchemes:
  //   app_id:
  //     type: apiKey
  //     description: API key to authorize requests.
  //     name: appid
  //     in: query

  @Delete('/deleteteacher')
  // @Security("jwt")
  // @Security('api_key')
  // @Header('x-account-id') /
  @SuccessResponse("200","Admin deleted")
  async deletteacher(@Request() delreq: DeleteTEACHER) {
    return await new MainTeacher().deletteacher(delreq.id);
  }
  @Security('api_key')
  @Post('/getteacherlist')
  async getteacherList(): Promise<SaveUpdateResTeacher[]> {
    const teacher: ITEACHER[] = await new MainTeacher().getteacherslist();
    return <SaveUpdateResTeacher[]>(teacher);
  }
}