import { Injectable, NgModule } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CardData } from '../../cartas/cardData';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  //Crea una nueva carta
  public createCard(data: {nombre: string, imageUrl: string, poderes: string, descripcion: string}) {
    return this.firestore.collection('cards').add(data);
  }

  //Obtiene una carta
  public getCard(documentId: string) {
    return 
      this.firestore.collection('cards').doc(documentId).snapshotChanges();
  }

  //Obtiene todas las cartas 
  public getCards() {
    return this.firestore.collection('cards').snapshotChanges();
  }

  //Actulaiza una carta
  public updateCard(documentId: string, data: any) {
    return 
      this.firestore.collection('cards').doc(documentId).set(data);
  }

}














