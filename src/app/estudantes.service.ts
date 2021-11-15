import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudantesService {
  url = 'http://localhost:3000/Estudantes';
  constructor(private http:HttpClient) { }
  getallEstudante(){
  return this.http.get( this.url );
  }
  saveEstudanteData( data:any ){
    console.log( data );
    return this.http.post(this.url, data)
  }
}
