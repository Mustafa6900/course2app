import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { PeopleButtonsComponent } from '../people-buttons/people-buttons.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PeopleButtonsComponent, TaskListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  people: any[] = []; // Kişilerin listesi
  selectedPerson: any; // Seçilen kişi
  private http = inject(HttpClient); // HTTP istekleri için
  private platformId = inject(PLATFORM_ID); // Platform kontrolü için

  ngOnInit() {
    this.loadPeopleData();
  }

  // Kişi verilerini JSON dosyasından yükler
  loadPeopleData() {
    this.http.get<any>('assets/people.json').subscribe(data => {
      this.people = data.people;
      // Eğer tarayıcıda çalışıyorsa, localStorage'dan görevleri yükle
      if (isPlatformBrowser(this.platformId)) {
        this.loadTasksFromLocalStorage();
      }
    });
  }

  // LocalStorage'dan kaydedilmiş görevleri yükler
  loadTasksFromLocalStorage() {
    this.people.forEach(person => {
      const savedTasks = localStorage.getItem(`tasks_${person.id}`);
      if (savedTasks) {
        person.tasks = JSON.parse(savedTasks);
      }
    });
  }

  // Bir kişi seçildiğinde çağrılır
  onPersonSelected(person: any) {
    this.selectedPerson = person;
  }
}