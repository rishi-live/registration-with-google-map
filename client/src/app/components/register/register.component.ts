import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MapService } from 'src/app/services/map.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // name: string = "Rishi";
  user: User = new User();
  selectedAddress: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  register() {
    // this.user.address = this.selectedAddress;
    this.authService.register(this.user).subscribe((response: any) => {
      console.log("user created");
      this.user = new User();
      // this.selectedAddress = {};
    })
  }

  onSelectAddress(address:  any) {
    console.log("called from parent component");
    this.user.address = address;    
  }
  
}
