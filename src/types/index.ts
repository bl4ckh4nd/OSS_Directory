export interface Project {
  id: string;
  name: string;
  description: string;
  stars: number;
  language: string;
  url: string;
  owner: string;
  avatar: string;
  topics: string[];
  lastCommit?: string;
  contributors?: number;
  issues?: number;
  pullRequests?: number;
  license?: string;
  readme?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}