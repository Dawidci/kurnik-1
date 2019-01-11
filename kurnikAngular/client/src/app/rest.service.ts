import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map, catchError, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { 
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  }
  private extractData(res: Response){
    let body = res;
    return body || {};  
  }

  getTimer(): Observable<any>{
    return this.http.get('http://worldclockapi.com/api/json/utc/now').pipe(map(this.extractData));
  }

  
}
