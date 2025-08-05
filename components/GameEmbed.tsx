"use client";

import React from "react";

interface GameEmbedProps {
  title?: string;
  description: string;
}

const GameEmbed: React.FC<GameEmbedProps> = ({ description }) => {
  return (
    <div className="flex flex-col h-full w-full gap-4">
      <div className="flex justify-center px-10 py-6">
        <p className="text-sm text-zinc-800 dark:text-white text-center">{description}</p>
      </div>
      <div className="flex-1 rounded-2xl overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-4xl" style={{ paddingBottom: '62.5%' }}> {/* 500/800 = 0.625 = 62.5% aspect ratio */}
          <iframe 
            id="game-iframe"
            src="/js-game/index.html" 
            className="absolute top-0 left-0 w-full h-full border-0" 
            style={{ overflow: 'hidden' }}
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
};

export default GameEmbed;
