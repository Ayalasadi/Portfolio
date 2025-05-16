'use client';
import React, { useState } from 'react';
import ProjectModal from "./ProjectModal";
import { Project } from "../app/types";
import rawProjects from '../data/projects.json';

const projects = rawProjects as Project[];

export default function NeuronMap() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-[600px]">
      <svg className="w-full h-full" viewBox="0 0 800 600">
        {projects.map((project) => (
          <g key={project.id}>
            <circle
              cx={project.position.x}
              cy={project.position.y}
              r={30}
              fill="#38bdf8"
              className="transition-all duration-300 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onClick={() => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
            />
            {hoveredProjectId === project.id && (
              <text
                x={project.position.x}
                y={project.position.y - 40}
                textAnchor="middle"
                className="fill-white text-sm pointer-events-none"
              >
                {project.title}
              </text>
            )}
          </g>
        ))}
      </svg>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}
