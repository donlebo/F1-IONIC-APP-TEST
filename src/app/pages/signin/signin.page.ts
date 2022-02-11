import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/providers/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  signInForm = new FormGroup
  ({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    os: new FormControl(''),
  });

  constructor(private authService: AuthService, public toastController: ToastController, private storage: Storage, private router: Router) { }

  async presentToast(message: string, color = 'success'){
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {}

  async onSubmit(){
    try {
      await this.authService.signin(this.signInForm.value);
      this.presentToast('Signin successfully');
      await this.router.navigate(['/login']);
      console.log(this.signInForm.value);
    } catch (err) {
      this.presentToast('Error signin', 'danger');
    }
  }
}
