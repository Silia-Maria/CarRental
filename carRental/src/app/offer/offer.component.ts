import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  info = new FormGroup({
    email: new FormControl("", Validators.email),
    title: new FormControl("", Validators.maxLength(3)),
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    number: new FormControl(""),
    country: new FormControl("", Validators.required),
    cardName: new FormControl("", Validators.required),
    cardNumber: new FormControl("", Validators.required),
    expDate: new FormControl("", Validators.required),
    cvc: new FormControl("", Validators.required),
    gtc: new FormControl("", Validators.required),
  })

  constructor() {

  }

  ngOnInit(): void {

  }



}
