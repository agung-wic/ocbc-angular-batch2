import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  tasks: Task[] = []
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
