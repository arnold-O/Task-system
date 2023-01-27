import { Injectable, Put } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTasksDto } from './dto/create-tasks.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTasksDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      title,
      description,
      status: TaskStatus.OPEN,
      id: uuid(),
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id == id);
  }
  deleteTaskById(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  UpdateTaskById(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);

    task.status = status;
    return task;
  }
}
