import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../model/APIResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FligthsService {

  private url = environment.flightsServiceURL;

  constructor(private http: HttpClient) { }
  fetchJourneyPath(origin: string, destination: string, type: string): Observable<APIResponse> {
    const url = `${this.url}/api/Flight?origin=${origin}&destination=${destination}&type=${type}`;
    return this.http.get<APIResponse>(url); 
  }
}
