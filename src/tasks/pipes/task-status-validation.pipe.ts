import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BadRequestException } from "@nestjs/common/exceptions";
import { TaskStatus } from "../task.model";





export class TaskStatusValidationPipe implements PipeTransform {

    readonly  allowedStatuses = [
          TaskStatus.OPEN,
          TaskStatus.DONE,
          TaskStatus.IN_PROGRESS

      ];
    transform(value: any, metadata: ArgumentMetadata) {

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} is an invalid status`)
        }
        return value
        
    }

    private isStatusValid(status:any){
       const index1 =  this.allowedStatuses.indexOf(status)

        return index1 !== -1
    }

}