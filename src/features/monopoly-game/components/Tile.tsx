import React from 'react';
import { Tile as TileType } from '../types';

interface TileProps {
    tile: TileType;
    position: 'top' | 'bottom' | 'left' | 'right' | 'corner';
}

const renderIcon = (tile: TileType) => {
    const iconSize = 'text-3xl';
    switch (tile.type) {
        case 'station':
            return <div className={iconSize}>🚂</div>;
        case 'utility':
            return <div className={iconSize}>{tile.name === '自来水厂' ? '💧' : '💡'}</div>;
        case 'chance':
            return <div className={`text-blue-600 text-4xl`}>?</div>;
        case 'community':
            return <div className={iconSize}>📦</div>;
        case 'tax':
            return <div className={iconSize}>💰</div>;
        default:
            return null;
    }
};

const PropertyContent: React.FC<{ tile: TileType, position: 'top' | 'bottom' | 'left' | 'right' }> = ({ tile, position }) => {
    if (position === 'left') {
        return (
            <div className="w-full h-full flex flex-row aspect-square">
                <div className="w-3/4 h-full flex items-center justify-center">
                    <div className="flex flex-col justify-around items-center text-center h-full p-1" style={{ writingMode: 'vertical-rl' }}>
                        <span className="text-xs uppercase font-semibold text-black">{tile.name}</span>
                        <span className="text-sm font-bold text-black">${tile.cost}</span>
                    </div>
                </div>
                <div style={{ backgroundColor: tile.color }} className="w-1/4 h-full" />
            </div>
        );
    }

    if (position === 'right') {
        return (
            <div className="w-full h-full flex flex-row aspect-square">
                <div style={{ backgroundColor: tile.color }} className="w-1/4 h-full" />
                <div className="w-3/4 h-full flex items-center justify-center">
                    <div className="flex flex-col justify-around items-center text-center h-full p-1" style={{ writingMode: 'vertical-rl' }}>
                        <span className="text-xs uppercase font-semibold text-black">{tile.name}</span>
                        <span className="text-sm font-bold text-black">${tile.cost}</span>
                    </div>
                </div>
            </div>
        );
    }

    const textContent = (
        <div className="flex flex-col justify-around items-center text-center flex-grow p-1">
            <span className="text-xs uppercase font-semibold text-black">{tile.name}</span>
            <span className="text-sm font-bold text-black">${tile.cost}</span>
        </div>
    );

    if (position === 'top') {
        return (
            <>
                {textContent}
                <div style={{ backgroundColor: tile.color }} className="h-1/4 w-full border-t border-black" />
            </>
        );
    }

    // For bottom
    return (
        <>
            <div style={{ backgroundColor: tile.color }} className="h-1/4 w-full border-b border-black" />
            {textContent}
        </>
    );
};

const InfoContent: React.FC<{ tile: TileType }> = ({ tile }) => (
    <div className="flex flex-col justify-around items-center text-center h-full p-1">
        <span className="text-xs uppercase font-semibold text-center w-full px-1 text-black">{tile.name}</span>
        {renderIcon(tile)}
        {tile.cost && <span className="text-sm font-bold mt-1 text-black">支付 ${tile.cost}</span>}
    </div>
);


const CornerTile: React.FC<{ tile: TileType }> = ({ tile }) => {
    let content;
    switch (tile.id) {
        case 0: // Go
            content = <div className="flex flex-col items-center justify-center h-full transform -rotate-45">
                <span className="text-lg font-bold text-red-600">出发</span>
                <span className="text-2xl">→</span>
            </div>;
            break;
        case 10: // Jail
            content = <div className="text-center h-full w-full flex flex-col justify-around items-center p-2">
                <span className="font-bold text-lg -translate-x-4 translate-y-2 -rotate-45 text-black">监狱</span>
                <span className="font-bold text-lg translate-x-4 -translate-y-2 rotate-[135deg] text-black">探望</span>
            </div>;
            break;
        case 20: // Parking
            content = <div className="text-center h-full w-full flex items-center justify-center transform -rotate-45">
                <span className="font-bold text-3xl">🚗</span>
            </div>;
            break;
        case 30: // Go to Jail
            content = <div className="text-center h-full w-full flex items-center justify-center transform -rotate-45">
                <span className="font-bold text-lg text-black">去监狱</span>
            </div>;
            break;
        default:
            content = <span className="text-lg font-bold text-black">{tile.name}</span>;
    }
    return <div className="h-full w-full flex items-center justify-center">{content}</div>;
};


const Tile: React.FC<TileProps> = ({ tile, position }) => {
    if (position === 'corner') {
        return (
            <div className="h-full w-full bg-green-50 border border-black flex items-center justify-center overflow-hidden">
                <CornerTile tile={tile} />
            </div>
        );
    }

    const getRotationClass = () => {
        switch (position) {
            case 'top': return '';
            case 'left': return '';
            case 'right': return '';
            default: return '';
        }
    };

    const content = tile.type === 'property'
        ? <PropertyContent tile={tile} position={position as any} />
        : <InfoContent tile={tile} />;

    return (
        <div className="h-full w-full bg-green-50 border border-black flex items-center justify-center overflow-hidden">
            <div className={`h-full w-full flex flex-col items-center ${getRotationClass()}`}>
                {content}
            </div>
        </div>
    );
};

export default Tile; 