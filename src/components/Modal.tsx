import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { ModalProps } from '../types';

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-cloudBurst/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div 
          className="relative bg-fiord/20 rounded-xl w-full max-w-4xl shadow-2xl shadow-casper/10 animate-glow"
          style={{ animation: 'modalSlideIn 0.5s ease-out' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-casper/5 via-regentGray/5 to-linkWater/5 rounded-xl gradient-animate" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-casper/60 hover:text-linkWater transition-colors duration-300 hover:rotate-90 transform"
          >
            <X size={24} />
          </button>
          <div className="relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};