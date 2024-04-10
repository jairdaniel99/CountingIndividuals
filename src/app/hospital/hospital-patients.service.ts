import { Injectable } from '@angular/core';

interface Patient {
  name: string;
  illness: string;
}

@Injectable({
  providedIn: 'root',
})
export class HospitalPatientsService {
  private hospitalPatients: Patient[] = [
    { name: 'Travis', illness: 'Fever' },
    { name: 'Dorothy', illness: 'Cold' },
  ];
  constructor() {}
  countPatients(): number {
    return this.hospitalPatients.length;
  }
}
