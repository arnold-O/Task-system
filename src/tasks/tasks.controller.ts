import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Put } from '@nestjs/common/decorators';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTasks(@Body() createTaskDto: CreateTasksDto):Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id:string) {
        return this.tasksService.getTaskById(id)

  }
  @Delete('/:id')
  deleteTaskById(@Param('id') id:string) {
        return this.tasksService.deleteTaskById(id)

  }
  @Put('/:id')
  updateTaskStatus(@Param('id') id:string, status:TaskStatus) {
        return this.tasksService.UpdateTaskById(id, status)

  }
}
