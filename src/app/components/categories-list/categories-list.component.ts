import { HeaderService } from './../templates/header/header.service';
import { DeviceService } from 'src/app/device.service';
import { Category } from './../../utils/interfaces/device.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  public categorys: Category | any;

  public displayedColumns = ['name', 'action']

  constructor(private deviceService: DeviceService, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Category Management'
    }
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.deviceService.getCategoryList().subscribe((res) => {
      this.categorys = res;
      console.log(this.categorys);

    })
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this Category?')) {
      this.deviceService.deleteCategory(id).subscribe(() => {
        this.deviceService.showMessage('category deleted')
        this.getList()
      }, (error) => {
        this.deviceService.showMessage(`delete error: ${error}`)
      })
    }
  }
}
