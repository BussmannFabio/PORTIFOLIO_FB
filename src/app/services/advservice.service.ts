import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanyeService {
  private apiUrl = 'https://api.kanye.rest';

  constructor(private http: HttpClient) {}

  getKanyeQuote(): Observable<{ quote: string }> {
    return this.http.get<{ quote: string }>(this.apiUrl);
  }
}
