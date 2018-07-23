import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject(['The initial Goal','Another Goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
