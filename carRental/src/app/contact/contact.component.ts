import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  info = new FormGroup ({
    email: new FormControl ("",Validators.email),
     title: new FormControl ("",Validators.maxLength(3)),
     firstName: new FormControl ("",Validators.required),
    lastName: new FormControl ("",Validators.required),
    password: new FormControl("",Validators.required),
    number: new FormControl(""),
   country: new FormControl("",Validators.required),
    cardName: new FormControl("",Validators.required),
    cardNumber: new FormControl("",Validators.required),
    expDate: new FormControl("",Validators.required),
    cvc: new FormControl("",Validators.required), 
    gtc: new FormControl("", Validators.required),   
  })

  constructor() { }

  ngOnInit(): void {
  }

}
