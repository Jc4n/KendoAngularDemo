import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // 我們要使用的Http

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
import { genderPipe } from './customizePipes/gender.pipe';

import { GridDataService } from './grid-data.service';


@NgModule({
  declarations: [
    AppComponent,
    genderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

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
  providers: [GridDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
