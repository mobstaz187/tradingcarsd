import React from 'react';
import { TradingCard } from '../types/card';
import { ShieldCheckIcon, BoltIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

interface CardProps {
  card: TradingCard;
}

const rarityColors = {
  common: 'bg-gray-500',
  uncommon: 'bg-green-500',
  rare: 'bg-blue-500',
  legendary: 'bg-purple-500'
};

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-105">
      <img 
        src={card.image} 
        alt={card.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-0 w-full p-4 text-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">{card.name}</h3>
            <span className={clsx(
              'px-2 py-1 rounded-full text-xs font-semibold',
              rarityColors[card.rarity]
            )}>
              {card.rarity}
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <BoltIcon className="w-5 h-5 text-red-500 mr-1" />
              <span>{card.attack}</span>
            </div>
            <div className="flex items-center">
              <ShieldCheckIcon className="w-5 h-5 text-blue-500 mr-1" />
              <span>{card.defense}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};