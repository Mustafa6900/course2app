import { Component, Input, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() selectedPerson: any; // Seçilen kişi giriş verisi
  private platformId = inject(PLATFORM_ID); // Platform kontrolü için

  // Bir görev tamamlandığında çağrılır
  completeTask(task: any) {
    task.completed = true;
    // Eğer tarayıcıda çalışıyorsa, localStorage'a kaydet
    if (isPlatformBrowser(this.platformId)) {
      this.saveToLocalStorage();
    }
  }

  // Görevleri localStorage'a kaydeder
  saveToLocalStorage() {
    localStorage.setItem(`tasks_${this.selectedPerson.id}`, JSON.stringify(this.selectedPerson.tasks));
  }
}