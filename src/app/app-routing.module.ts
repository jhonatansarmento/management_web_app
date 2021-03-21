import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeviceCreateComponent } from "./device-managment/device-create/device-create.component";
import { DevicesListComponent } from "./device-managment/devices-list/devices-list.component";



const routes: Routes = [
  {
    path: "", component: DevicesListComponent
  },
  {
      path: 'devices-managment', component: DevicesListComponent
  },
  { 
      path: "category", component: DeviceCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
