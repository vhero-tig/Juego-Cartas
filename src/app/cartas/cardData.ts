export interface CardData {
  imageId: string;
  nombre: string;
  poderes: string;
  imageUrl: string;
  descripcion: string;
  state: 'default' | 'flipped' | 'matched';
}