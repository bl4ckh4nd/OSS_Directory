import { useState } from 'react';
import { Github, Code2 } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { Modal } from './components/Modal';
import { ProjectDetail } from './components/ProjectDetail';
import { projects } from './data/projects';
import type { Project } from './types';

function App() {
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const languages = Array.from(new Set(projects.map((p) => p.language)));

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());
    const matchesLanguage = !selectedLanguage || project.language === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-cloudBurst">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center fixed" />
      <header className="relative bg-cloudBurst/95 border-b border-fiord/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-regentGray rounded-lg">
                <Code2 className="w-8 h-8 text-cloudBurst" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-casper to-linkWater bg-clip-text text-transparent">
                  Open Source Universe
                </h1>
                <p className="text-casper/60 text-sm">Discover amazing projects</p>
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-casper hover:text-linkWater transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center mb-12">
          <SearchBar value={search} onChange={setSearch} />
          <FilterBar
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            languages={languages}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-casper/60 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </main>

      <Modal 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>

      <footer className="relative bg-cloudBurst/95 border-t border-fiord/30 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-casper/60">
            Exploring the universe of open source
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;