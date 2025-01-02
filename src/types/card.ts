export interface TradingCard {
  id: number;
  name: string;
  image: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  attack: number;
  defense: number;
}