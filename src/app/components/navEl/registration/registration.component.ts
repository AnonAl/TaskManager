import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorsService} from '../../../services/validators.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formGroup: FormGroup;
  controls: any[];
  validator = new ValidatorsService();
  constructor( private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
        userName : ['', [Validators.pattern(/^[a-zA-Z]+$/), Validators.required,
          Validators.minLength(3)]],
        lastName : ['', [Validators.pattern(/^[a-zA-Z]+$/), Validators.required,
          Validators.minLength(3)]],
        email : ['', [Validators.pattern(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/), Validators.required]],
        phoneNum : ['',[Validators.required, Validators.minLength(7)]],
        password : [''],
        repeatPass : ['']
      }
    );
  }


  submit(): void{
    if (this.formGroup.invalid){
      console.log(this.formGroup.getRawValue());
    }
    else{
      alert('The form has a problem');
    }
  }
}


