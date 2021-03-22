import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/templates/header/header.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { DeviceCreateComponent } from './components/device-create/device-create.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { DeviceComponent } from './components/view/device/device.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryComponent } from './components/view/category/category.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component'
import { MatCardModule } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevicesListComponent,
    DeviceCreateComponent,
    DeviceComponent,
    CategoriesListComponent,
    CategoryComponent,
    CategoryCreateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
