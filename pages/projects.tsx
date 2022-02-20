import Link from "next/link";
import React from "react";
import GameOfLife from "../components/GameOfLife";
import Navbar from "../components/Navbar";

const gameoflife = () => {
  return (
    <div className="flex flex-col h-screen dark:bg-slate-600 bg-white">
      <Navbar page="Home" />
      <div className="flex flex-wrap self-center align-center justify-center max-w-4xl">
        <div className="m-4 p-6 max-w-sm rounded overflow-hidden shadow-lg dark:bg-slate-400">
          <Link href="/demos/gameoflife" passHref>
            <div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Game Of Life</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #demo
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #automaton
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #conway
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default gameoflife;
