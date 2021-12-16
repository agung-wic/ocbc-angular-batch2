import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  tasks: Task []= []
  categories = ['School', 'Worl', 'Hobby']

  OnSubmit(form: NgForm) {
    const { taskName, category } = form.value
    this.tasks = [...this.tasks, new Task(taskName, false, category)]
    form.reset()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
