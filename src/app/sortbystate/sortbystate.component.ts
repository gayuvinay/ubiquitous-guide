import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sortbystate',
  templateUrl: './sortbystate.component.html',
  styleUrls: ['./sortbystate.component.scss']
})
export class SortbystateComponent implements OnInit {

  @Output() applySort= new EventEmitter();
  sortings = [
    {label: 'ohio',             icon: 'text_rotation_down',    isSelected: false,   value:'ohio'},
    {label: 'new_york',             icon: 'text_rotate_up',        isSelected: false,    value:'new_york'},
    {label: 'new_mexico',             icon: 'text_rotate_up',        isSelected: false,    value:'new%20mexico'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  sortSelection(sort:any) {
    const {value} = sort
    this.sortings.forEach((o) => o.isSelected = false);
    sort.isSelected = true
    this.applySort.emit(value);
  }

}
