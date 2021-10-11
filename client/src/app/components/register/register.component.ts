import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { MapService } from 'src/app/services/map.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // name: string = "Rishi";
  user: User = new User();
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    console.log("generate token called from Register component");    
    this.mapService.generateToken();
  }

  register() {
    console.log("register user",);
    console.log({user:this.user});
  }
  onAddressType(value: any) {
    console.log(value)
  }
}
