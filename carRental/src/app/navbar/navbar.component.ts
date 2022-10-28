import { Component, OnInit } from '@angular/core';
// import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  donation: number = 0;

  constructor() { }
  donationCount() {
    this.donation = this.donation + 10;
  }

  ngOnInit(): void {
  }

   navToggle() {
    var links: any = document.getElementById("navLinks");
    if (links.style.display == "block") {
      links.style.display = "none";

    } else {
      links.style.display = "block";
    }
    
  }
  // nav = document.querySelector(".navBar");
  
  // @HostListener("window:scroll", []) onWindowScroll(nav: any) {
    
  //   if (document.body.scrollTop > 20 ||document.documentElement.scrollTop > 20) {
  //     nav.style.color = "black";
  //   } else {
  //     nav.style.color = "white";
  //   }
  //   // do some stuff here when the window is scrolled
  //   const verticalOffset = window.pageYOffset 
  //         || document.documentElement.scrollTop 
  //         || document.body.scrollTop || 0;
}
  // Change Nav color when scrolling 
 
  

  // navColor () {  
  //   if (document.body.scrollTop > 20 ||document.documentElement.scrollTop > 20) {
  //     this.nav.style.color = "black";
  //   } else {
  //     this.nav.style.color = "white";
  //   }
  //   onWindowScroll (navColor())
  // }
  


