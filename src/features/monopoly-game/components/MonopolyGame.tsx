import React from 'react';
import Board from './Board';

const MonopolyGame: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center p-4">
            {/* We can add Player Info panels and control panels here later */}
            <Board />
        </div>
    );
};

export default MonopolyGame; 