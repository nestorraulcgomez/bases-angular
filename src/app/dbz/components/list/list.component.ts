import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor() { }

  @Input()
  public characterList: Character[] = [{
    id: '1213123',
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();
  // public onDeleteId = new EventEmitter<number>();



  onDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log(id);
    this.onDeleteId.emit(id);
  }

}
