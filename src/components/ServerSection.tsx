import { FC } from 'react';
import { Server } from 'lucide-react';

interface ServerSectionProps {
    className?: string;
}

export const ServerSection: FC<ServerSectionProps> = ({ className = '' }) => {
    return (
        <div className={`card flex flex-col items-center justify-center ml-auto ${className}`}>
            <div className="text-4xl text-green-400 mb-2">
                <Server size={48} />
            </div>
            <div className="text-lg font-semibold text-green-400">Server</div>
        </div>
    );
}; 