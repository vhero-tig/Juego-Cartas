import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirestoreService } from '../services/firestore/firestore.service';
import { CardData } from './cardData';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
  
})
export class CartasComponent implements OnInit {
  
  public cards = [];
 
  @Input() data: CardData;

  @Output() cardClicked = new EventEmitter();

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getCards().subscribe((cartasSnapshot) => {
      this.cards = [];
      cartasSnapshot.forEach((cardData: any) => {
        this.cards.push({
          id: cardData.payload.doc.id,
          data: cardData.payload.doc.data()
        });
      })
    });
  }

}






