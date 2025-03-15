import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  // locations are being served up by JSON server - start with "json-server --watch db.json"
  // to install JSON server globally use command "npm install -g json-server"
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    // fetch could be replaces by Angular HttpClient
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: String, lastName: String, email: String) {
    console.log('Application submitted for:', firstName, lastName, email);
  }
}
