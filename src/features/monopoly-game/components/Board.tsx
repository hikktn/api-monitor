import React from 'react';
import Tile from './Tile';
import { boardData } from '../data/boardData';

const Board: React.FC = () => {
    return (
        <div className="w-[930px] h-[930px] bg-green-100 border-4 border-black p-4">
            <div
                className="grid h-full w-full"
                style={{
                    gridTemplateColumns: '80px repeat(9, 1fr) 80px',
                    gridTemplateRows: '80px repeat(9, 1fr) 80px'
                }}
            >
                {/* Top Row and Corners */}
                {boardData.slice(20, 31).map((tile, index) => (
                    <div key={tile.id} style={{ gridColumn: 11 - index, gridRow: 1 }}>
                        <Tile tile={tile} position={tile.type === 'parking' || tile.type === 'go-to-jail' ? 'corner' : 'top'} />
                    </div>
                ))}

                {/* Bottom Row and Corners */}
                {boardData.slice(0, 11).reverse().map((tile, index) => (
                    <div key={tile.id} style={{ gridColumn: 11 - index, gridRow: 11 }}>
                        <Tile tile={tile} position={tile.type === 'start' || tile.type === 'jail' ? 'corner' : 'bottom'} />
                    </div>
                ))}

                {/* Left Row */}
                {boardData.slice(11, 20).reverse().map((tile, index) => (
                    <div key={tile.id} style={{ gridColumn: 1, gridRow: 2 + index }}>
                        <Tile tile={tile} position="left" />
                    </div>
                ))}

                {/* Right Row */}
                {boardData.slice(31, 40).map((tile, index) => (
                    <div key={tile.id} style={{ gridColumn: 11, gridRow: 2 + index }}>
                        <Tile tile={tile} position="right" />
                    </div>
                ))}

                {/* Center Area */}
                <div
                    className="col-start-2 col-span-9 row-start-2 row-span-9 bg-green-200 border-2 border-black flex flex-col justify-center items-center"
                >
                    <h1 className="text-5xl font-bold text-green-800 transform -rotate-45">MONOPOLY</h1>
                </div>
            </div>
        </div>
    );
};

export default Board; 