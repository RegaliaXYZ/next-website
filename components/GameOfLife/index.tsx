import React, { useEffect, useState } from "react";
import GOL from "../../utils/gameoflife";

import {
  PlayIcon,
  StopIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  XIcon,
} from "@heroicons/react/outline";

interface Settings {
  width: number;
  height: number;
  percentage: number;
}

const GameOfLife = () => {
  const [settings, setSettings] = useState<Settings>({
    width: 10,
    height: 10,
    percentage: 0.5,
  });
  const [board, setBoard] = useState<number[][]>([]);
  const [history, setHistory] = useState<number[][][]>([]);
  const [running, setRunning] = useState(false);
  const [gol, setGol] = useState<GOL>(new GOL());

  useEffect(() => {
    // console.log(gol);
    //let board_setup = gol.initBoard();
    //setBoard(board_setup);
    // console.log(board_setup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setGol(new GOL(settings.height, settings.width, settings.percentage));
  }, [settings]);

  const setupBoard = () => {
    let board_ = gol.initBoard();
    setBoard(board_);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      running ? nextBoard() : setBoard(board);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, board]);

  function changeDefault(colnumber: number, rownumber: number) {
    if (!running) {
      let newBoard = [...board];
      newBoard[colnumber][rownumber] =
        newBoard[colnumber][rownumber] === 0 ? 1 : 0;
      setBoard(newBoard);
    } else {
      console.log("Cannot change state of a cell while automaton is playing!");
    }
  }

  function nextBoard() {
    let next = gol.next(board); // so this can access it
    let history_ = history;
    history_.push(board);
    setHistory(history_);
    setBoard(next);
  }

  function prevBoard() {
    if (history.length > 0 && !running) {
      let prev = history[history.length - 1];
      let history_ = history;
      history_.pop();
      setHistory(history_);
      setBoard(prev);
    }
  }

  function handleButton() {
    setRunning(!running);
  }

  const resetBoard = () => {
    setSettings({
      width: 10,
      height: 10,
      percentage: 0.5,
    });
    setBoard([]);
    setHistory([]);
    setRunning(false);
    setGol(new GOL());
  };

  const changeSettings = (
    param: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (param) {
      case "height":
        setSettings({
          ...settings,
          height: Number(event.target.value),
        });
        break;
      case "width":
        setSettings({
          ...settings,
          width: Number(event.target.value),
        });
        break;
      case "percentage":
        setSettings({
          ...settings,
          percentage: Number(event.target.value),
        });
        break;
      default:
        console.error("Wrong type passed to GameOfLife parameter setup");
    }
  };

  return (
    <>
      {board.length === 0 && (
        <div className="w-full max-w-xs self-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="width"
              >
                Width
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="width"
                type="number"
                placeholder="Width of the board"
                onChange={(e) => changeSettings("width", e)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="height"
              >
                Height
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="height"
                type="number"
                placeholder="Height of the board"
                onChange={(e) => changeSettings("height", e)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="percentage"
              >
                Percentage: {settings.percentage}
              </label>
              <input
                className="w-full h-2 bg-blue-100 appearance-none"
                id="percentage"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={settings.percentage || 0.5}
                placeholder="Percentage of alive cells on the board"
                onChange={(e) => changeSettings("percentage", e)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => setupBoard()}
              >
                Start Automaton
              </button>
            </div>
          </form>
        </div>
      )}
      {board.length > 0 && (
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-row justify-center">
            <button onClick={() => prevBoard()}>
              <ArrowCircleLeftIcon className="h-12 w-12 text-gray-700 dark:text-gray-300" />
            </button>

            <button onClick={() => handleButton()}>
              {!running && (
                <PlayIcon className="h-12 w-12 text-gray-700 dark:text-gray-300" />
              )}
              {running && (
                <StopIcon className="h-12 w-12 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button onClick={() => resetBoard()}>
              <XIcon className="h-12 w-12 text-red-700 dark:text-red-300" />
            </button>
            <button onClick={() => nextBoard()}>
              <ArrowCircleRightIcon className="h-12 w-12 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex flex-row justify-center">
            {board.map((col, colnumber) => {
              return (
                <div key={colnumber} className="flex flex-col">
                  {col.map((item, rownumber) => (
                    <div
                      key={colnumber + "_" + rownumber}
                      onClick={() => changeDefault(colnumber, rownumber)}
                      className={
                        item === 0
                          ? " bg-slate-800 dark:bg-slate-200  w-10 h-10 block border border-black"
                          : " bg-green-300 dark:bg-green-700  w-10 h-10 block border border-black"
                      }
                    ></div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default GameOfLife;
