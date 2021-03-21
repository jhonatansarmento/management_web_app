import { Router } from '@angular/router';
import { DeviceService } from 'src/app/device.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/utils/interfaces/device.interface';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  submitingData = false

  category: Category = {
    name: ''
  }

  constructor(private deviceService: DeviceService, private router: Router) { }

  ngOnInit(): void {
  }

  createCategory(): void {
    this.submitingData = true
    this.deviceService.createCategory(this.category).subscribe(() => {
      this.deviceService.showMessage('Category Created')
      this.router.navigate(['/category'])
    }, (error) => {
      this.deviceService.showMessage(`Error to Create: ${error}`)
    }, () => {
      this.submitingData = false
    })
  }

  cancel(): void {
    this.router.navigate(['/category'])
  }
}
