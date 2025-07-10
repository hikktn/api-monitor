import React from 'react';
import { Tile as TileType } from '../types';

interface TileProps {
    tile: TileType;
}

const Tile: React.FC<TileProps> = ({ tile }) => {
    const { type, name, cost, color } = tile;

    const baseClasses = 'border border-black flex flex-col justify-between p-1';

    // Simplified rendering logic for different tile types
    switch (type) {
        case 'property':
            return (
                <div className={`${baseClasses} text-center`}>
                    <div style={{ backgroundColor: color }} className="h-4 w-full border-b border-black -m-1 mb-1"></div>
                    <span className="text-xs uppercase text-black">{name}</span>
                    <span className="text-xs font-semibold text-black">${cost}</span>
                </div>
            );
        case 'station':
            return (
                <div className={`${baseClasses} text-center justify-center items-center`}>
                    <span className="text-xs uppercase mb-1 text-black">{name}</span>
                    {/* Placeholder for station icon */}
                    <div className="text-2xl">🚂</div>
                    <span className="text-xs font-semibold mt-1 text-black">${cost}</span>
                </div>
            );
        case 'utility':
            return (
                <div className={`${baseClasses} text-center justify-center items-center`}>
                    <span className="text-xs uppercase mb-1 text-black">{name}</span>
                    {/* Placeholder for utility icon */}
                    <div className="text-2xl">{name === '自来水厂' ? '💧' : '💡'}</div>
                    <span className="text-xs font-semibold mt-1 text-black">${cost}</span>
                </div>
            );
        case 'chance':
        case 'community':
            return (
                <div className={`${baseClasses} text-center justify-center items-center`}>
                    <span className="text-xs uppercase text-black">{name}</span>
                    <div className="text-2xl">{type === 'chance' ? '❓' : '📦'}</div>
                </div>
            );
        case 'tax':
            return (
                <div className={`${baseClasses} text-center justify-center items-center`}>
                    <span className="text-xs uppercase text-black">{name}</span>
                    <div className="text-2xl">💰</div>
                    <span className="text-xs font-semibold text-black">支付 ${cost}</span>
                </div>
            );
        default: // Corners: Go, Jail, Parking, Go to Jail
            return (
                <div className={`${baseClasses} text-center justify-center items-center`}>
                    <span className="text-lg font-bold uppercase text-black">{name}</span>
                </div>
            );
    }
};

export default Tile; 