import { HttpClient } from '@angular/common/http';
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
