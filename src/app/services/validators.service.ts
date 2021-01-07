import {Injectable, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService  implements OnInit{

  objectOfControls: any[] = [];
  flag: boolean;

  constructor() {
  }

  ngOnInit(): void {
   this.flag = false;
  }

  addDataToArr(formGroup: FormGroup): any[]{
    for (const controlsKey in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(controlsKey)){
      this.objectOfControls.push(controlsKey);
      }
    }
    return this.objectOfControls;
  }

  checkInData(valueOfField): void {

    for (const data of this.objectOfControls) {
      switch (data) {
        case 'userName':
        this.checkValidName(valueOfField);  break;
        case 'surName':
        this.checkValidSurName(valueOfField); break;
        //                    break; }
        // {this.validNameOrSurname(controlName);
        //  break; }
        // case 'password': if (data === controlName) {this.validPass(controlName, controlName); } break;
        default: console.log('all good');
      }
      console.log();
      break;
    }
  }

  valueOfField(formGroup: FormGroup): string{
    let value: string;
    for (const val of formGroup.controls.toString()){
      value = formGroup.controls[val].value;
    }
    return value;
  }

  checkValidName(userName: string): boolean{
    const  str = /[^a-zA-Z]/;
    if (str.test(userName )  || userName === ''){
      alert('Incorrect value in field Name!' + '\n' + 'Please input the correct value');
      return !this.flag;
    }
  }
  checkValidSurName(userName: string): boolean{
    const  str = /[^a-zA-Z]/;
    if (str.test(userName )  || userName === ''){
      alert('Incorrect value in field SurName!' + '\n' + 'Please input the correct value');
      return !this.flag;
    }
  }

  validEmail(email: string): void {

  }

  validPass(password: string, repeatPass: string): void{
    if (typeof (password && repeatPass) !== 'number' || password !== repeatPass){
      alert('Incorrect value');
    }
  }

}
