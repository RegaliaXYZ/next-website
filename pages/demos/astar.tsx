import { NextPage } from 'next';
import React from 'react';
import Astar from '../../components/Astar';
import Navbar from '../../components/Navbar';

const AstarDemo: NextPage = () => {
  return (
    <div className="flex flex-col h-screen dark:bg-slate-600 bg-white">
      <Navbar page="Home" />
      <Astar />
    </div>
  );
};

export default AstarDemo;
