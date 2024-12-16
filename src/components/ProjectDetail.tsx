import { Star, Users, GitPullRequest, CircleDot, Book, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="p-6">
      <div className="flex items-start gap-6 mb-8">
        <img
          src={project.avatar}
          alt={`${project.owner}'s avatar`}
          className="w-20 h-20 rounded-xl ring-2 ring-casper/20"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-linkWater">{project.name}</h2>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-regentGray text-cloudBurst rounded-lg hover:bg-casper transition-colors"
            >
              View on GitHub <ExternalLink size={16} />
            </a>
          </div>
          <p className="text-casper/60 mt-1">{project.owner}</p>
          <p className="text-casper/80 mt-4">{project.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-cloudBurst/30 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-casper mb-1">
            <Star size={16} />
            <span className="text-sm font-medium">Stars</span>
          </div>
          <span className="text-xl font-bold text-linkWater">{project.stars.toLocaleString()}</span>
        </div>
        <div className="bg-cloudBurst/30 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-casper mb-1">
            <Users size={16} />
            <span className="text-sm font-medium">Contributors</span>
          </div>
          <span className="text-xl font-bold text-linkWater">{project.contributors || '—'}</span>
        </div>
        <div className="bg-cloudBurst/30 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-casper mb-1">
            <CircleDot size={16} />
            <span className="text-sm font-medium">Issues</span>
          </div>
          <span className="text-xl font-bold text-linkWater">{project.issues || '—'}</span>
        </div>
        <div className="bg-cloudBurst/30 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-casper mb-1">
            <GitPullRequest size={16} />
            <span className="text-sm font-medium">Pull Requests</span>
          </div>
          <span className="text-xl font-bold text-linkWater">{project.pullRequests || '—'}</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-linkWater mb-2 flex items-center gap-2">
            <Book size={16} className="text-casper" /> About
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-1 text-xs font-medium bg-regentGray/10 text-casper rounded-full border border-regentGray/20"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-casper/60">Primary Language</p>
                <p className="text-casper">{project.language}</p>
              </div>
              <div>
                <p className="text-sm text-casper/60">License</p>
                <p className="text-casper">{project.license || '—'}</p>
              </div>
              <div>
                <p className="text-sm text-casper/60">Last Commit</p>
                <p className="text-casper">{project.lastCommit || '—'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};