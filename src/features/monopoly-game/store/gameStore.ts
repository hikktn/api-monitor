import { create, StateCreator } from 'zustand';
import { GameState, Player, Tile } from '../types';

interface GameActions {
    rollDice: () => void;
    buyProperty: () => void;
    endTurn: () => void;
    setPlayers: (players: Player[]) => void;
}

// Placeholder for initial state
const initialBoard: Tile[] = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    name: `Property ${i}`,
    type: 'property' as const,
    cost: 100 + i * 10,
    color: '#ccc'
}));

const initialState: GameState = {
    players: [],
    board: initialBoard,
    currentPlayerId: '',
    dice: [0, 0],
    turnPhase: 'ROLLING',
    gameLog: ['Welcome to Monopoly!'],
};

type StoreType = GameState & GameActions;

const gameStoreCreator: StateCreator<StoreType> = (set) => ({
    ...initialState,

    setPlayers: (players) => set({
        players,
        currentPlayerId: players.length > 0 ? players[0].id : ''
    }),

    rollDice: () => set((state) => {
        if (state.turnPhase !== 'ROLLING') return state;

        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        const currentPlayer = state.players.find(p => p.id === state.currentPlayerId);
        if (!currentPlayer) return state;

        const newPosition = (currentPlayer.position + dice1 + dice2) % 40;

        return {
            dice: [dice1, dice2],
            turnPhase: 'ACTION',
            players: state.players.map(p =>
                p.id === state.currentPlayerId ? { ...p, position: newPosition } : p
            ),
            gameLog: [...state.gameLog, `${currentPlayer.name} rolled a ${dice1 + dice2} and moved to ${state.board[newPosition].name}.`]
        };
    }),

    buyProperty: () => set((state) => {
        // Placeholder for buy logic
        console.log("Buying property...");
        return state;
    }),

    endTurn: () => set((state) => {
        if (state.turnPhase === 'ROLLING') return state;
        const currentPlayerIndex = state.players.findIndex(p => p.id === state.currentPlayerId);
        if (currentPlayerIndex === -1) return state;

        const nextPlayerIndex = (currentPlayerIndex + 1) % state.players.length;
        const nextPlayer = state.players[nextPlayerIndex];

        return {
            currentPlayerId: nextPlayer.id,
            turnPhase: 'ROLLING',
            gameLog: [...state.gameLog, `It's now ${nextPlayer.name}'s turn.`]
        };
    }),
});

export const useGameStore = create<StoreType>(gameStoreCreator); 