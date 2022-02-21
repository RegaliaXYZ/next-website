import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/Navbar';

interface Project {
  name: string;
  description: string;
  path: string;
  tags: string[];
}
const projects: Project[] = [
  {
    name: 'Game Of Life',
    description: "This is an implementation of Conway's Game Of Life",
    path: '/demos/gameoflife',
    tags: ['conway', 'automaton', 'Browser demo'],
  },
  {
    name: 'A* Pathfinding',
    description: 'This is an implementation of A* pathfinding algorithm',
    path: '/demos/astar',
    tags: ['A*', 'pathfinding', 'Browser demo'],
  },
];
const Projects: NextPage = () => {
  return (
    <div className="flex flex-col h-screen dark:bg-slate-600 bg-white">
      <Navbar page="Home" />
      <div className="flex flex-wrap self-center align-center justify-center max-w-4xl">
        {projects.map((project, index) => {
          return (
            <div className="m-4 p-6 max-w-sm rounded overflow-hidden shadow-lg dark:bg-slate-400">
              <Link key={index} href={project.path} passHref>
                <div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project.name}</div>
                    <p className="text-gray-700 text-base">
                      {project.description}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    {project.tags.map((tag, id) => {
                      return (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #{tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
