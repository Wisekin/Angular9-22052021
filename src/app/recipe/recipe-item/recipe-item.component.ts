import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 
@Input() card: { type: string, name: string, content: string } =
 {type: "", name:"", content:""}

 constructor( ) {
 }
  ngOnInit(): void {
  }

}
