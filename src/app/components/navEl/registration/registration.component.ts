import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ValidatorsService} from '../../../services/validators.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formGroup: FormGroup;
  controls: any[];

  constructor( private formBuilder: FormBuilder, private validator: ValidatorsService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
        userName : [''],
        surName : [''],
        email : [''],
        phoneNum : [''],
        password : [''],
        repeatPass : ['']
      }
    );
    this.validator.addDataToArr(this.formGroup);
  }

  checkFormData(): void {
    this.validator.checkInData(this.formGroup.controls.userName.value);
    this.validator.checkInData(this.formGroup.controls.surName.value);
    console.log(this.formGroup.controls.userName.value);
  }

}
