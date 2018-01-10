import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

     // Register the modules
     BrowserAnimationsModule,
     ButtonsModule,
     InputsModule,
     DateInputsModule,
     IntlModule,
     DropDownsModule,
     RippleModule,
     GridModule,
     DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
