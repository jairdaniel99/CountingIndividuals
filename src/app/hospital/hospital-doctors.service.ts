import { Injectable } from '@angular/core';

interface Doctor {
  name: string;
  specialization: string;
}

@Injectable({
  providedIn: 'root',
})
export class HospitalDoctorsService {
  hospitalDoctors: Doctor[] = [
    { name: 'Dr. Smith', specialization: 'Cardiologist' },
    { name: 'Dr. Johnson', specialization: 'Neurologist' },
  ];

  constructor() {}
  countDoctors(): number {
    return this.hospitalDoctors.length;
  }
}
