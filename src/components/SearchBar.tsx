import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl w-full group">
      <div className="absolute inset-0 bg-gradient-to-r from-casper/20 via-regentGray/20 to-linkWater/20 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
      <Search 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-casper transition-transform duration-300 group-hover:scale-110" 
        size={20} 
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search open source projects..."
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-fiord/20 border border-fiord/30 text-linkWater placeholder-casper/40 focus:border-casper focus:ring-2 focus:ring-casper/20 transition-all duration-300 relative z-10"
      />
    </div>
  );
};