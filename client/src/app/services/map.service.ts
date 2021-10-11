import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapTokenResponse } from '../models/map-token';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private client_id = 'client_id';
  private client_secret = 'secret_ket';
  private tokenUrl = `/api/security/oauth/token?grant_type=client_credentials&client_id=${this.client_id}&client_secret=${this.client_secret}`;

  private addressUrl = '/api/places/geocode?itemCount=5&address=';

  private tokenResponse: MapTokenResponse;
  constructor(private http: HttpClient) { }

  generateToken() {
    console.log('token generating....');
    this.http.post(this.tokenUrl, {}).subscribe((tokenData) => {
      this.tokenResponse = <MapTokenResponse>tokenData;
      // tokenData => console.log({ ...tokenData });
    }
    );
  }
}
