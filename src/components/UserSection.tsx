import React from 'react';
import { User } from 'lucide-react';

interface UserSectionProps {
    className?: string;
}

export const UserSection: React.FC<UserSectionProps> = ({ className = '' }) => {
    return (
        <div className={`card flex flex-col items-center justify-center ${className}`}>
            <div className="text-4xl text-blue-400 mb-2">
                <User size={48} />
            </div>
            <div className="text-lg font-semibold text-blue-400">User</div>
        </div>
    );
}; 