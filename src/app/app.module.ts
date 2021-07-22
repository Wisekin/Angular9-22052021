import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ApplicationServices } from './services/application.services';
import {DropdownDirective } from './directive/dropdown.directive';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';

const routes: Routes = [
  {path: "shopping-list", component: ShoppingListComponent},
  
  {path: "recipe", component: RecipeComponent,
  
    children:[
    {path: "recipe-list", component: RecipeListComponent, children: [
     {path: "recipe-item", component: RecipeItemComponent},
    ]},
  {path: "recipe-details", component: RecipeDetailsComponent}
  ]},
  
  {path: "home",  component: HomeComponent},
  {path: "**",  redirectTo: "home"}




]

@NgModule({
  declarations: [	
    AppComponent,
      ServerComponent,
      RecipeComponent,
      RecipeListComponent,
      RecipeItemComponent,
      RecipeDetailsComponent,
      ShoppingListComponent,
      HeaderComponent,
      DropdownDirective,
      HomeComponent,
      ShoppingHistoryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  
  ],
  providers: [ ApplicationServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
