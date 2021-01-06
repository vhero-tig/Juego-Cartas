import { Component } from '@angular/core';
import { CardData } from './cartas/cardData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-juego-cartas';

  cardImages = [
    'https://i.pinimg.com/736x/5b/7c/2e/5b7c2e53afb971241f72458b0c9a587a.jpg',
    'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt80ff58fe809777ff/5db05fa8adc8656c7d24e7d6/RiotX_ChampionList_akali.jpg?quality=90&width=250',
    'https://newesc.com/wp-content/uploads/League-of-legends-gay.jpg',
  ]; 
  cards: CardData[] = [];

  ngOnInit(): void {
    this.setupCards();
  }

  setupCards(): void {
    this.cards = [];

    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: '0Ov0B1j6P1vgthZtS58I',
        nombre: '',
        imageUrl: image,
        descripcion: '',
        poderes: '',
        state: 'default'
      };
        this.cards.push({ ...cardData});
        this.cards.push({ ...cardData});
    });
    this.cards = this.suffleArray(this.cards);
  }

  suffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

 
}