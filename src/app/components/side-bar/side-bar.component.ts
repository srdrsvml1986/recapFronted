import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  selectedItem = 1;
  constructor() { }

  ngOnInit(): void {
  }

  getSelectedItemClass(index: number){
    if (index === this.selectedItem){
      return 'list-group-item active';
    }else{
      return 'list-group-item';
    }
  }
  setSelectedItem(index: number){
    this.selectedItem = index;
  }
}
