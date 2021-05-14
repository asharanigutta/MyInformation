import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const hobbies = [
      { id: 1, hobby: 'Gardening' },
      { id: 2, hobby: 'Listening to music' },
      { id: 3, hobby: 'Cooking' },
      { id: 4, hobby: 'Reading stories books' },
      { id: 5, hobby: 'Playing with kids' },
      { id: 6, hobby: 'Dancing' },
  
    ];
    return {hobbies};
  }

  
}
