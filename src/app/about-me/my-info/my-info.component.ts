import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyInfoService } from 'src/app/Repositories/my-info.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css'],
  providers: [MyInfoService]
})
export class MyInfoComponent implements OnInit {

  constructor(private myInfoService: MyInfoService) {
    this.getMyInformation()
  }

  myInformationForm: FormGroup
  myInformationFormValidations = {
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    hobbies: new FormControl()
  }
  ngOnInit() {
    this.myInformationForm = new FormGroup(this.myInformationFormValidations)
  }

  myHobbies
  hobbiesList: any[] = []
  getMyInformation() {
    this.myInfoService.getMyInfoList().subscribe(res => {
      if (res) {
        this.myHobbies = res;
        this.myHobbies.forEach(hobby => {
          this.hobbiesList.push(hobby['hobby'] + " ")
        });
        this.myInformationForm.get('hobbies').setValue(this.hobbiesList)

      }
    })
  }

  onSaveInformation() {
    let payload = Object.assign({}, this.myInformationForm.value)

    console.log(payload)
  }
}
