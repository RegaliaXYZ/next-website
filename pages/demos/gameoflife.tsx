import { NextPage } from 'next';
import React from 'react';
import GameOfLife from '../../components/GameOfLife';
import Navbar from '../../components/Navbar';

const GameOfLifeDemo: NextPage = () => {
  return (
    <div className="flex flex-col h-screen dark:bg-slate-600 bg-white">
      <Navbar page="Home" />
      <GameOfLife />
    </div>
  );
};

export default GameOfLifeDemo;
