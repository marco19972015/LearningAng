import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductsModule } from './products/products.module';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';



@NgModule({  // This is used to configure an Angular module
  declarations: [  // Contains angular artifacts that shre a common functionality bound to specfic app features
    AppComponent, 
    CopyrightDirective, 
    NumericDirective, 
  ],
  imports: [  // Allows us to use features from another module
    BrowserModule,  // Configures our application to run in the browser
    ProductsModule  
  ],
  providers: [],  // Contains special-purpose Angular artifacts called -services- such as HTTP endpoint ect...
  bootstrap:  // Defines the component that will be loaded at application startup
   [AppComponent]  // The main component of our Angular application
})
export class AppModule {}
