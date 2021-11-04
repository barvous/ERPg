import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
