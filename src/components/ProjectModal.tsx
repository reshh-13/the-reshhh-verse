'use client';

import React from 'react';
import { X, ExternalLink, Code2, Layers, Cpu, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { WashiTape, PaperClip, ComicBurst } from './Doodles';
import { sounds } from './AudioEffects';

export interface Project {
  id: string;
  issueNumber: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  techStack: string[];
  keyFeatures: string[];
  accentColor: string;
  badgeColor: string;
  visualType: 'asl' | 'restore' | 'agri' | 'vinyl' | 'hostel';
  status: string;
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#FFFDF8] border-4 sm:border-[6px] border-coffee rounded-2xl shadow-comic-xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Comic Bar */}
        <div 
          className="p-4 sm:p-5 border-b-4 border-coffee flex items-center justify-between text-white"
          style={{ backgroundColor: project.accentColor }}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs bg-black/40 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              {project.issueNumber}
            </span>
            <span className="font-comic text-2xl sm:text-3xl tracking-wide">
              {project.title}
            </span>
          </div>

          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="p-1.5 bg-coffee text-white hover:bg-black rounded-lg border-2 border-white shadow-comic-sm transition-transform hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 bg-notebook-lined">
          
          {/* Tagline & Status */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-coffee/20">
            <span className="font-handwriting text-2xl text-caramel font-bold">
              &ldquo;{project.tagline}&rdquo;
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-1 bg-comic-yellow text-coffee border-2 border-coffee shadow-comic-sm">
              {project.status}
            </span>
          </div>

          {/* Deep Description */}
          <div className="bg-white/80 p-5 rounded-xl border-2 border-coffee shadow-comic-sm">
            <h4 className="font-comic text-xl text-coffee mb-2 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-comic-pink" />
              MISSION BRIEFING
            </h4>
            <p className="font-sans text-sm sm:text-base text-coffee/90 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Architectural Key Features */}
          <div className="bg-white/80 p-5 rounded-xl border-2 border-coffee shadow-comic-sm">
            <h4 className="font-comic text-xl text-coffee mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-comic-purple" />
              KEY CAPABILITIES & ARCHITECTURE
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm font-sans text-coffee">
                  <span className="font-comic text-base text-comic-pink mt-0.5">★</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Arsenal */}
          <div>
            <h4 className="font-comic text-xl text-coffee mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-comic-cyan" />
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-bold bg-[#F5EBDD] border-2 border-coffee px-3 py-1 rounded shadow-comic-sm text-coffee"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project View / Link Placeholders */}
          <div className="pt-4 border-t-2 border-coffee/20 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-coffee/70">
              <span className="font-bold text-coffee">ACCESS PROTOCOL:</span> Academic & Engineering Research Project
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => sounds.playPop()}
                className="font-mono text-xs font-bold px-4 py-2 bg-cream text-coffee border-2 border-coffee shadow-comic-sm hover:bg-beige/50"
              >
                // GITHUB REPO (PLACEHOLDER)
              </button>
              <button
                onClick={() => {
                  sounds.playPunch();
                  onClose();
                }}
                className="font-comic text-base tracking-wide px-5 py-2 bg-comic-yellow text-coffee border-2 border-coffee shadow-comic hover:translate-x-0.5 hover:translate-y-0.5"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

