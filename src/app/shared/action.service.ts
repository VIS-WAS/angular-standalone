import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable()
export class ActionService {
  value: boolean = false;
  constructor() {}

  changeAction() {
    this.value = !this.value;

    if (this.value) {
      return 'Start Again';
    } else {
      return 'Done';
    }
  }
}
