import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatRippleModule} from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';


const SharedImportes = [
  CommonModule,
  MatIconModule,
  MatExpansionModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  // ProgressHttpModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatDialogModule,
  MatRippleModule,
  MatCardModule,
  MatFormFieldModule, 
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule
  
];

@NgModule({
  declarations: [],
  imports: [
  SharedImportes
  ],
  exports:[
    SharedImportes
  ],
  entryComponents: [
  ],
  providers:[
  {
    provide: MatDialogRef,
    useValue: {}
  }
  ]
})
export class SharedModule { }
