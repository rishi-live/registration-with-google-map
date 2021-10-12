import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapTokenResponse } from '../models/map-token';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private client_id = 'client_id';
  private client_secret = 'client_secret';
  private tokenUrl = `/api/security/oauth/token?grant_type=client_credentials&client_id=${this.client_id}&client_secret=${this.client_secret}`;

  private addressUrl = `/api/places/geocode?itemCount=5&address=`;

  private tokenResponse: MapTokenResponse;
  constructor(private http: HttpClient) {
    console.log('generate token called from register component and fired from map service constructor');
    this.generateToken();
  }

  generateToken() {
    console.log('token generating....');
    this.http.post(this.tokenUrl, {}).subscribe((tokenData) => {
      this.tokenResponse = <MapTokenResponse>tokenData;
      // console.log("generate Token called from map",{ ...tokenData });
    }
    );
  }
  getAddresses(address: String) {
    // console.log("search term", address);
    return this.http.get(this.addressUrl + address, {
      headers: {
        "Authorization": this.tokenResponse.token_type + " " + this.tokenResponse.access_token
      },
    }).pipe(map((results: any) => results.copResults));
  }
}
