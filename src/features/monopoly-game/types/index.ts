export interface Player {
    id: string;
    name: string;
    money: number;
    position: number; // Board index from 0 to 39
    avatarUrl: string;
    propertiesOwned: number[]; // Array of tile IDs
}

export type TileType =
    | 'property'
    | 'chance'
    | 'community'
    | 'tax'
    | 'start'
    | 'jail'
    | 'parking'
    | 'go-to-jail'
    | 'station'
    | 'utility';

export interface Tile {
    id: number;
    name: string;
    type: TileType;
    cost?: number;
    rent?: number[];
    ownerId?: string;
    color?: string;
}

export interface GameState {
    players: Player[];
    board: Tile[];
    currentPlayerId: string;
    dice: [number, number];
    turnPhase: 'ROLLING' | 'ACTION' | 'ENDED';
    gameLog: string[];
} 