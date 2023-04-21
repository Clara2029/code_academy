import { Component, EventEmitter, Input, Output } from '@angular/core';
 
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor() {

  }

  @Input() all!: number;
  @Input() free!: number;
  @Input() premium!: number;

  selectedRadioButtonValue = "All"; 

  @Output() filterRadioButtonSelectionChanged = new EventEmitter<string>(); 
  
  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);        
  }
}
