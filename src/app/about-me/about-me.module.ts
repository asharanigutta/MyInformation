import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInfoComponent } from './my-info/my-info.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MyInfoComponent, HomeComponent],
  imports: [
    CommonModule,MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    BrowserAnimationsModule
  ]
})


export class AboutMeModule { 
 
}
