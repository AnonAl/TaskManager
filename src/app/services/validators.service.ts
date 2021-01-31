import {Injectable, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService  implements OnInit{

  flag: boolean;

  constructor() {
  }

  ngOnInit(): void {
   this.flag = false;
  }

  validEmail(email: string): void {

  }

  validPass(password: AbstractControl, repeatPass: AbstractControl): boolean{
    if (password !== repeatPass){
      return true;
    }
    else {
      return false;
    }
  }
  validNum(num: AbstractControl): boolean {
    if(num.value !== Number ){
      return true;
    }
    else {
      return false;
    }
  }

}
