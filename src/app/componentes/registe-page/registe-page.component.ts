import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registe-page',
  templateUrl: './registe-page.component.html',
  styleUrls: ['./registe-page.component.scss']
})
export class RegistePageComponent implements OnInit {
 public email: string;
 public password: string;
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
 onSubmitRegisterAddUser() {
  this.authService.registeruser(this.email, this.password)
  .then( (res) => {
  this.router.navigate(['/privado']);
  }).catch( (err) => {
    console.log(err);
  });
}
}
