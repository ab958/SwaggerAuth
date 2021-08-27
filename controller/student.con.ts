import { ISTUDENT } from '../document/student';
import { MainStudent } from '../repo/studentrepo';
import CustomeError from '../error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveUpdateResStudent } from '../resType/resType';
import { DeleteSTUDENT, GetSTUDENT, SaveReqSTUDENT,UpdateReqSTUDENT } from '../reqType/studentRequest';
@Route('student')
@Tags('student')
export class StudentController {
  constructor() { }
  @Post("/getstudent")
  async getstudent(@Body() getreq:GetSTUDENT): Promise<SaveUpdateResStudent> {
    const admin = await new MainStudent().getstudent(getreq.id);
    if (admin === null) throw new CustomeError(404, 'Admin not found');
    return <SaveUpdateResStudent>admin;
  }
  @Post('/savestudent')
  async savestudent(@Body() admin: SaveReqSTUDENT): Promise<SaveUpdateResStudent> {
    const new_admin:ISTUDENT = await new MainStudent().savestudent(<ISTUDENT>(admin));
    return <SaveUpdateResStudent>(new_admin);
  }
  @Put('/updatestudent')
  async updatestudent(@Body() admin: UpdateReqSTUDENT): Promise<SaveUpdateResStudent> {
    const update_admin = await new MainStudent().updatestudent(<ISTUDENT>(admin));
    if (update_admin === null)
      throw new CustomeError(400, 'Admin not updated');
    return <SaveUpdateResStudent>update_admin;
  }
  @Delete('/deletestudent')
  @SuccessResponse("200","Admin deleted")
  async deletstudent(@Body() delreq: DeleteSTUDENT) {
    return await new MainStudent().deletstudent(delreq.id);
  }
  @Post('/getstudentlist')
  async getstudentList(): Promise<SaveUpdateResStudent[]> {
    const admin: ISTUDENT[] = await new MainStudent().getstudentslist();
    return <SaveUpdateResStudent[]>(admin);
  }

}