import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TutorDataService {
  private selectedTutor: any;

  setTutor(tutor: any) {
    this.selectedTutor = tutor;
  }

  getTutor() {
    return this.selectedTutor;
  }

  constructor() {}
}
