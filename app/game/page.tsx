import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next/types";
import React from "react";
import GameEmbed from "@/components/GameEmbed";

export const metadata: Metadata = {
  title: "Code in Life | Game",
  description: "JavaScript Game page",
};

const Game = () => {
  return (
    <>
      <Navbar page="game" />

      <section className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
        <div className="h-[90vh] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <GameEmbed 
            title="JavaScript game" 
            description="Your goal is to save every carrot from the bugs. Tap only the carrots to protect them." 
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Game;
