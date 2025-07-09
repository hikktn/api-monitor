import React from 'react';

export interface StoryData {
    id: string;
    username: string;
    avatar: string;
    isViewed?: boolean;
    isLive?: boolean;
}

interface InstagramStoryProps {
    story: StoryData;
}

export const InstagramStory: React.FC<InstagramStoryProps> = ({ story }) => {
    return (
        <div className="flex flex-col items-center space-y-1 cursor-pointer">
            <div className={`p-0.5 rounded-full ${story.isViewed ? 'bg-gray-300' : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
                }`}>
                <div className="bg-white p-0.5 rounded-full">
                    <img
                        src={story.avatar}
                        alt={story.username}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                </div>
                {story.isLive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-md">
                        LIVE
                    </div>
                )}
            </div>
            <span className="text-xs text-gray-700 max-w-[70px] truncate">
                {story.username}
            </span>
        </div>
    );
}; 