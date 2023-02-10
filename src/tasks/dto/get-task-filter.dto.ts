import { TaskStatus } from "../task.model";
import { IsOptional, IsIn , IsNotEmpty} from "class-validator"



export class getTaskFilterDto {
     

   @IsOptional()
   @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
   status: TaskStatus;

   @IsOptional()
   @IsNotEmpty()
    search:string

}