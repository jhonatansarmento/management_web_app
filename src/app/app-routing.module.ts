import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeviceCreateComponent } from "./components/device-create/device-create.component";
import { DevicesListComponent } from "./components/devices-list/devices-list.component";



const routes: Routes = [
  {
    path: "", redirectTo: 'devices-managment', pathMatch: 'full'
  },
  {
    path: 'devices-managment', component: DevicesListComponent
  },
  {
    path: "category", component: CategoriesListComponent
  },
  {
    path: "devices-managment/create", component: DeviceCreateComponent
  },
  {
    path: "category/create", component: CategoryCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
