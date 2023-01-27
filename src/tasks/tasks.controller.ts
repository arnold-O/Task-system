import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Delete, Param, Patch, Put } from '@nestjs/common/decorators';
import { query } from 'express';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { getTaskFilterDto } from './dto/get-task-filter.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto:getTaskFilterDto): Task[] {

    if(Object.keys(filterDto).length){
      return this.tasksService.getTasksWithFilters(filterDto)
    }else{

      return this.tasksService.getAllTasks();
    }

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
  @Patch('/:id/status')
  updateTaskStatus(@Param('id') id:string, @Body('status') status:TaskStatus):Task {
        return this.tasksService.UpdateTaskById(id, status)

  }
}
