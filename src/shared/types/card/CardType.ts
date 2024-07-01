export interface ICard {
  id?: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  onClick?: () => void;
}