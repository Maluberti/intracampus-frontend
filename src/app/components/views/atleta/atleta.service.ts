import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Atleta } from './atleta.model';
import { Atletica } from './read-atleta/atletica.model';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {
  baseUrl: string = environment.baseUrl;
  

  constructor(private http: HttpClient) { }

  findById(atleta_id: any): Observable<Atleta> {
    const url = `${this.baseUrl}/atleta/${atleta_id}`;
    return this.http.get<Atleta>(url);
  }

  findAtleticaById(atletica_id: any): Observable<Atletica>{
    const url = `${this.baseUrl}/atletica/${atletica_id}`;
    return this.http.get<Atletica>(url);
  }
}
