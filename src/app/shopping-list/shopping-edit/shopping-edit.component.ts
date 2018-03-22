import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;
  @Output() addElemEmitter = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddComponent() {
    const ingredient = new Ingredient(
      this.inputNameRef.nativeElement.value,
      this.inputAmountRef.nativeElement.value,
    );
    this.addElemEmitter.emit(ingredient);
  }
}
