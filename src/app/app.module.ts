//imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//declarations
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  //project directives, components, and pipes
  declarations: [
      AppComponent,
      ProductListComponent

  ],
  //directives, components, and pipes from other sources
  imports: [
    BrowserModule,
    FormsModule
  ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
