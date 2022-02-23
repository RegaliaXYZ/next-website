import Link from "next/link";
import React from "react";
import Navbar from "../Navbar";

interface Project {
  name: string;
  description: string;
  github: string;
  path: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Game Of Life",
    description: "This is an implementation of Conway's Game Of Life",
    github: "",
    path: "/demos/gameoflife",
    tags: ["React", "TypeScript", "Next", "Browser demo"],
  },
  {
    name: "A* Pathfinding",
    description: "This is an implementation of A* pathfinding algorithm",
    github: "",
    path: "",
    tags: ["A*", "pathfinding", "Browser demo"],
  },
  {
    name: "Photomosaic",
    description:
      "Photomosaic project. Consists of recreating an image by creating a mosaic of input images",
    github: "https://github.com/RegaliaXYZ/mosaic",
    path: "",
    tags: ["Photomosaic", "Python", "School Project"],
  },
  {
    name: "Chaikin Algorithm",
    description:
      "Simple implementation of the Chaikin rounding algorithm, done in  C++ using GLUT library.",
    github: "https://github.com/RegaliaXYZ/chaikin-glut-algorithm",
    path: "",
    tags: ["Chaikin", "C++", "GLUT", "School Project"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col dark:bg-slate-600 bg-white">
      <div className="flex flex-wrap self-center align-center justify-center max-w-4xl">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="m-4 p-6 max-w-sm rounded overflow-hidden shadow-lg dark:bg-slate-400"
            >
              <div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 flex flex-row justify-center items-center">
                    {project.github !== "" && (
                      <a
                        className="p-2"
                        href={project.github}
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <p> </p>
                      </a>
                    )}
                    <p> {project.name}</p>
                  </div>
                </div>
                <Link
                  key={index}
                  href={project.path !== "" ? project.path : ""}
                  passHref
                >
                  <div>
                    <p className="text-gray-700 text-base">
                      {project.description}
                    </p>
                    <div className="px-6 pt-4 pb-2">
                      {project.tags.map((tag, id) => {
                        return (
                          <span
                            key={id}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                          >
                            #{tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
