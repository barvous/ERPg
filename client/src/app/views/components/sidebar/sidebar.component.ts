import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  carousel = [
    {
      path: 'assets/d4.jpg/'
    },
    {
      path: 'assets/dado_d20.png/'
    }
  ];

  showFiller = false;
  style:any;
  isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }


  closeMenu(){
    this.isOpen = !this.isOpen;
  }

  onItemClick() {
    alert('NADA PARA VER AQUI');
  }

}
