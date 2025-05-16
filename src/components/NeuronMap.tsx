'use client';
import React, { useState } from 'react';
import ProjectModal from "./ProjectModal";
import { Project } from "../app/types";
import rawProjects from '../data/projects.json';

const projects = rawProjects as Project[];
const skillFilters = ['Python', 'CI/CD', 'Privacy-first', 'Mentorship'];

export default function NeuronMap() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const visibleProjects = activeSkill
    ? projects.filter((p) => p.skills?.includes(activeSkill))
    : projects;

  return (
    <div className="relative w-full h-[600px]">
      {/* Skill Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {skillFilters.map((skill) => (
          <button
            key={skill}
            onClick={() =>
              setActiveSkill(activeSkill === skill ? null : skill)
            }
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              activeSkill === skill
                ? 'bg-blue-600 text-white'
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* SVG Neuron Map */}
      <svg className="w-full h-full" viewBox="0 0 800 600">
        {visibleProjects.map((project) => (
          <g key={project.id}>
            <circle
              cx={project.position.x}
              cy={project.position.y}
              r={30}
              fill="#38bdf8"
              className={`transition-all duration-300 hover:scale-110 cursor-pointer ${
                hoveredProjectId === project.id
                  ? 'drop-shadow-[0_0_10px_#38bdf8] animate-pulse'
                  : ''
              }`}
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
