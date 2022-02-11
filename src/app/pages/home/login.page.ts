import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/providers/auth.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logInForm = new FormGroup
  ({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, public toastController: ToastController, private router: Router, private storage: Storage) { }

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
      const {accessToken, refreshToken, expiresIn} = await this.authService.login(this.logInForm.value);
      this.storage.create();
      this.storage.set('accessToken', accessToken);
      this.storage.set('refreshToken', refreshToken);
      this.storage.set('expiresIn', expiresIn);
      this.presentToast('Login successfully');
      await this.router.navigate(['/home']);
      console.log(this.logInForm.value);
    } catch (err) {
      console.log(err);
      this.presentToast('User not found', 'danger');
    }
  }

  toggleTheme(event){
    //console.log(event);
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    } 
  }
}
