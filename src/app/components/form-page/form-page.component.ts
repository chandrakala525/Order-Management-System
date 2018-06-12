import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})

export class FormPageComponent implements OnInit {
// let formDetails:any;
// let name:string;
// let password:any;
// let email:any;
// let phonenumber:number;
// let address:any;
// let country:string;
// let gender:string;
// let technology:any;


  formDetails={
    name:"",
    password:"",
    email:"",
    phonenumber:"",
    address:"",
    country:"",
    gender:"",
    technology:""
  }
  constructor(){
    
  }
  
  ngOnInit() {
  }

  onSubmit(value:any){
    this.formDetails.name = value.name;
    this.formDetails.password = value.password;
    this.formDetails.email = value.email;
    this.formDetails.phonenumber = value.phonenumber;
    this.formDetails.address = value.address;
    this.formDetails.country = value.country;
    this.formDetails.gender = value.gender;
    this.formDetails.technology = value.technology;
    console.log(this.formDetails);
  }
}