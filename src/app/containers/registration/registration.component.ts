import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonFormData } from 'src/app/components/json-form/json-form.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  
})
export class RegistrationComponent implements OnInit {
  regForm!: FormGroup;

  public formData: JsonFormData = { controls: []};


  constructor(private _fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get('../../../assets/my-form.json')
    .subscribe((formData: any) => {
      console.log(formData)
      this.formData = formData;
    });
  }

  submitForm() {
    console.log(this.regForm)
  }

}
