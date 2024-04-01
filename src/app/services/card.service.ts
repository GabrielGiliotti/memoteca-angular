import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardObject } from '../interfaces/card-object';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly URL = "http://localhost:3000/pensamentos";

  constructor(private client: HttpClient) { }

  create(card: CardObject) : Observable<CardObject> {
    return this.client.post<CardObject>(this.URL, card);
  }

  get() : Observable<CardObject[]> {
    return this.client.get<CardObject[]>(this.URL);
  }

  getPaged(page: number, limit: number, filter: string) : Observable<CardObject[]> {
    
    let params = new HttpParams()
      .set("_page", page)
      .set("_limit", limit);

    if(filter.trim().length > 2) {
      params = params.set("q", filter);
    }

    return this.client.get<CardObject[]>(this.URL, { params });
  }

  getById(id: number): Observable<CardObject> {
    const url = `${this.URL}/${id}`;
    return this.client.get<CardObject>(url);
  }

  update(card: CardObject) : Observable<CardObject> {
    const url = `${this.URL}/${card.id}`;
    return this.client.put<CardObject>(url, card);
  }

  delete(id: number) : Observable<CardObject> {
    const url = `${this.URL}/${id}`;
    return this.client.delete<CardObject>(url);
  } 
}
