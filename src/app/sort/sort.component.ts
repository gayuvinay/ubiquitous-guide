import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Output() applySort= new EventEmitter();
  sortings = [
    {label: 'Apple',             icon: 'text_rotation_down',    isSelected: false,   value:1},
    {label: 'Mango',             icon: 'text_rotate_up',        isSelected: false,    value: 2},
    {label: 'Bannana',           icon: 'dialpad',               isSelected: false,   value:3},
    {label: 'Orange',            icon: 'bubble_chart',          isSelected: false,   value:4},
    {label: 'showAll',           icon: 'bubble_chart',          isSelected: false,   value:"show"},
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
