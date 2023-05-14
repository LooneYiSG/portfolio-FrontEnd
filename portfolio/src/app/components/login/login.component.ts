import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('myModalClose') modalClose!: { nativeElement: { click: () => void; }; };

  loginError:string = '';  
  loginForm = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  userLoginOn: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService){}

  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });
  }
  
  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  login(){

    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (error) => {
          console.error(error);
          this.loginError=error;
        },
        complete: () => {
          console.info("Credentials sent");
          this.checkLogin();
        }
      });
    }else{
      this.loginForm.markAllAsTouched();
      this.loginError="Error al ingresar los datos!";
    }

  }

  checkLogin(){
    if(this.userLoginOn){
      this.modalClose.nativeElement.click();
      this.loginForm.reset();
      console.info("Login successfully!");
    }else{
      this.loginError="Usuario inexistente! por favor verifique las credenciales.";
    }
  }


  inConstruction():void{
    alert("Componente en construcción");
  }

}
