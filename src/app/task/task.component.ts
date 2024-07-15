import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: any; // Görev giriş verisi
  @Input() disabled: boolean = false; // Butonun aktif olup olmadığını kontrol eder
  @Output() taskCompleted = new EventEmitter<any>(); // Görev tamamlandığında ebeveyn bileşene bildirim

  // Görev tamamlandığında çağrılır
  completeTask() {
    this.task.completed = true;
    this.taskCompleted.emit(this.task);
  }
}