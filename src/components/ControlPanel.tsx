import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface ControlPanelProps {
    onSendRequest: () => void;
    onPause: () => void;
    onReset: () => void;
    isRunning: boolean;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
    onSendRequest,
    onPause,
    onReset,
    isRunning
}) => {
    return (
        <div className="card">
            <div className="flex justify-center gap-4">
                <button
                    onClick={onSendRequest}
                    className="button-primary"
                >
                    <Play size={20} />
                    Send Request
                </button>

                <button
                    onClick={onPause}
                    className="button-danger"
                >
                    <Pause size={20} />
                    Pause
                </button>

                <button
                    onClick={onReset}
                    className="button-secondary"
                >
                    <RotateCcw size={20} />
                    Reset
                </button>
            </div>

            <div className="mt-4 text-center">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${isRunning
                        ? 'bg-green-900/50 text-green-400 border border-green-400/50'
                        : 'bg-red-900/50 text-red-400 border border-red-400/50'
                    }`}>
                    <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-green-400' : 'bg-red-400'}`} />
                    {isRunning ? 'Running' : 'Stopped'}
                </div>
            </div>
        </div>
    );
}; 