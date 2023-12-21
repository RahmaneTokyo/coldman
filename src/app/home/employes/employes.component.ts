import { Component } from '@angular/core';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.scss'
})
export class EmployesComponent {
  add: boolean;
  submitted: boolean;
  employes: any = [];

  constructor() {
    this.add = false;
    this.submitted = false;

    this.employes = [
      { prenom: 'Omar', nom: 'Camara', username: 'coldman', email: 'omar@gmail.com' },
      { prenom: 'Rahmane', nom: 'Ndiaye', username: 'tokyosan', email: 'rahmane@gmail.com' },
      { prenom: 'Amina', nom: 'Ba', username: 'geisha', email: 'amina@gmail.com' },
    ];
  }

  addEmploye(value: any) {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.add = false;
    }, 3000);
    console.log(value);
  }
}
