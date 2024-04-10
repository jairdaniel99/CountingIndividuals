import { Injectable } from '@angular/core';
import { HospitalDoctorsService } from './hospital-doctors.service';
import { HospitalPatientsService } from './hospital-patients.service';
@Injectable({
  providedIn: 'root',
})
export class HospitalTotalService {
  hospitalDoctorService;
  hospitalPatientService;

  constructor(
    hospitalDoctorService: HospitalDoctorsService,
    hospitalPatientService: HospitalPatientsService
  ) {
    this.hospitalDoctorService = hospitalDoctorService;
    this.hospitalPatientService = hospitalPatientService;
  }
  countTotal(): number {
    return (
      this.hospitalDoctorService.countDoctors() +
      this.hospitalPatientService.countPatients()
    );
  }
}
