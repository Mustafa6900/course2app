import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-buttons.component.html',
  styleUrls: ['./people-buttons.component.css']
})
export class PeopleButtonsComponent {
  @Input() people: any[] = []; // Kişi listesi giriş verisi
  @Output() personSelected = new EventEmitter<any>(); // Kişi seçildiğinde ebeveyn bileşene bildirim

  // Bir kişi seçildiğinde çağrılır
  selectPerson(person: any) {
    this.personSelected.emit(person);
  }
}
