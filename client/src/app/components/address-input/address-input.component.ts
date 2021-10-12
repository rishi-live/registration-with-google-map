import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css'],
})
export class AddressInputComponent implements OnInit {
  addresses: any;
  selectedAddress: any = {};
  @Output('onSelect')
  onSelectAddress = new EventEmitter()
  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    
  }

  onAddressType() {
    const address = this.selectedAddress.formattedAddress;
    // address search from map api
    this.mapService.getAddresses(address).subscribe((addressResponse) => {
      // console.log(addressResponse);
      this.addresses = addressResponse;
    });
  }
  _onSelectAddress(address: any) {
    // console.log('selected address', address);
    this.selectedAddress = address;
    this.onSelectAddress.emit(this.selectedAddress);
    // console.log("called from child", address);

    this.addresses = [];
  }
}
