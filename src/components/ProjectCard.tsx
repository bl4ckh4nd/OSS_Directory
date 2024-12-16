import { Star, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="group relative bg-fiord/20 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-casper/10 via-regentGray/10 to-linkWater/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-animate" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,_rgba(166,184,201,0.1),transparent_60%)]" />
      <div className="relative p-6 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={project.avatar}
            alt={`${project.owner}'s avatar`}
            className="w-12 h-12 rounded-lg ring-2 ring-casper/20 group-hover:ring-casper/40 transition-all duration-300"
          />
          <div>
            <h3 className="font-semibold text-lg text-linkWater group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-casper group-hover:to-linkWater transition-all duration-300">
              {project.name}
            </h3>
            <p className="text-sm text-casper/60">{project.owner}</p>
          </div>
        </div>
        
        <p className="text-casper/80 mb-4 flex-grow group-hover:text-casper transition-colors duration-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs font-medium bg-regentGray/10 text-casper rounded-full border border-regentGray/20 transition-all duration-300 group-hover:border-regentGray/40 group-hover:bg-regentGray/20"
            >
              {topic}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-fiord/30 group-hover:border-fiord/50 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sm text-casper/60">
              <Star size={16} className="text-casper group-hover:text-linkWater transition-colors duration-300" />
              {project.stars.toLocaleString()}
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-regentGray/10 text-casper rounded-lg border border-regentGray/20 group-hover:border-regentGray/40 transition-all duration-300">
              {project.language}
            </span>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-casper hover:text-linkWater transition-colors duration-300 transform hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};