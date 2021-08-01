import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Output() applySort= new EventEmitter();
  sortings = [
    {label: 'micro',             icon: 'text_rotation_down',    isSelected: false,   value:'micro'},
    {label: 'nano',             icon: 'text_rotate_up',        isSelected: false,    value:'nano'},
    {label: 'regional',             icon: 'text_rotate_up',        isSelected: false,    value:'regional'},
    {label: 'brewpub',             icon: 'text_rotate_up',        isSelected: false,    value:'brewpub'},
    {label: 'large',             icon: 'text_rotate_up',        isSelected: false,    value:'large'},
    {label: 'planning',             icon: 'text_rotate_up',        isSelected: false,    value:'planning'},
    {label: 'bar',             icon: 'text_rotate_up',        isSelected: false,    value:'bar'},
    {label: 'contract',             icon: 'text_rotate_up',        isSelected: false,    value:'contract'},
    {label: 'proprietor',             icon: 'text_rotate_up',        isSelected: false,    value:'proprietor'},
    {label: 'closed',             icon: 'text_rotate_up',        isSelected: false,    value:'closed'},
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
