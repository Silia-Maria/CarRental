import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Array<{name: string, price: number, seats: number, transmission: string, img: string}> = [{
    name: "OpelCorsa",
    price: 100,
    seats: 5,
    transmission: "manual",
    img: "/assets/images/opel.jpg"
    },
    {
    name: "Mercedes",
    price: 300,
    seats: 4,
    transmission: "automatic",
    img: "/assets/images/mercedes.jpg"
    },
    {
    name: "VW-Bus",
    price: 300,
    seats: 8,
    transmission: "automatic",
    img: "/assets/images/vwbus.jpg" 
    },
    {
    name: "Ford",
    price: 150,
    seats: 3,
    transmission: "manual",
    img: "/assets/images/ford.jpg"
    },
    {
    name: "Fiat",
    price: 100,
    seats: 4,
    transmission: "manual",
    img: "/assets/images/fiat.jpg"
    },
    {
    name: "Smart",
    price: 90,
    seats: 2,
    transmission: "automatic",
    img: "/assets/images/smart.jpg"
    },
    {
    name: "BMW",
    price: 250,
    seats: 5,
    transmission: "automatic",
    img: "/assets/images/bmw.jpg"
    },
    {
    name: "Honda",
    price: 150,
    seats: 5,
    transmission: "manual",
    img: "/assets/images/honda.jpg"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
