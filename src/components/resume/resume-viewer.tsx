'use client';

import { useState } from 'react';
import { Download, ExternalLink, FileText, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/data/profile';

type DocumentType = 'resume-pdf' | 'cv-pdf' | 'ats-png';

interface DocumentOption {
  id: DocumentType;
  label: string;
  sublabel: string;
  type: 'pdf' | 'image';
  url: string;
  filename: string;
}

const documents: DocumentOption[] = [
  {
    id: 'resume-pdf',
    label: 'Standard Resume',
    sublabel: 'Google Drive PDF',
    type: 'pdf',
    url: 'https://drive.google.com/file/d/1wTgKlihCN0a8mEngnnaLwh2ZXCVYIJEf/view?usp=drive_link',
    filename: 'hasib-ullah-resume.pdf',
  },
  {
    id: 'cv-pdf',
    label: 'Full Curriculum Vitae',
    sublabel: 'Google Drive PDF',
    type: 'pdf',
    url: 'https://drive.google.com/file/d/1wTgKlihCN0a8mEngnnaLwh2ZXCVYIJEf/view?usp=drive_link',
    filename: 'hasibullah-cv.pdf',
  },
  {
    id: 'ats-png',
    label: 'ATS Optimized Version',
    sublabel: 'Image Preview',
    type: 'image',
    url: '/resume/ATS resume hasibullah .png',
    filename: 'ATS-resume-hasibullah.png',
  },
];

export function ResumeViewer() {
  const [activeDocId, setActiveDocId] = useState<DocumentType>('resume-pdf');
  const activeDoc = documents.find((doc) => doc.id === activeDocId) || documents[0];

  const previewUrl = activeDoc.url.includes('drive.google.com')
    ? 'https://drive.google.com/file/d/1wTgKlihCN0a8mEngnnaLwh2ZXCVYIJEf/preview'
    : `${activeDoc.url}#toolbar=0&navpanes=0`;

  return (
    <div className="space-y-6">
      {/* Tab Selector & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        {/* Document Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {documents.map((doc) => {
            const isActive = doc.id === activeDocId;

            return (
              <button
                key={doc.id}
                type="button"
                onClick={() => setActiveDocId(doc.id)}
                className={`portfolio-btn gap-2.5 rounded-xl px-4 py-2.5 text-xs font-semibold ${
                  isActive
                    ? 'portfolio-btn-cyan'
                    : 'portfolio-btn-secondary'
                }`}
              >
                {doc.type === 'pdf' ? (
                  <FileText className="h-4 w-4 shrink-0" />
                ) : (
                  <ImageIcon className="h-4 w-4 shrink-0" />
                )}
                <div className="text-left">
                  <div>{doc.label}</div>
                  <div className="text-[10px] opacity-75 font-normal">{doc.sublabel}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={activeDoc.url}
            target="_blank"
            rel="noreferrer"
            className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Open Google Drive</span>
          </a>

          <a
            href={activeDoc.url}
            target="_blank"
            rel="noreferrer"
            className="portfolio-btn portfolio-btn-cyan gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold"
          >
            <Download className="h-3.5 w-3.5" />
            <span>View / Download</span>
          </a>
        </div>
      </div>

      {/* Main Document Display */}
      <div className="relative min-h-[650px] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 shadow-2xl">
        {activeDoc.type === 'pdf' ? (
          <iframe
            src={previewUrl}
            title={activeDoc.label}
            className="h-[750px] w-full border-0 rounded-3xl"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6">
            <div className="relative w-full max-w-3xl aspect-[1/1.4] overflow-hidden rounded-2xl border border-slate-800 shadow-xl bg-slate-900">
              <Image
                src={activeDoc.url}
                alt="ATS Resume Preview"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain object-top"
              />
            </div>
          </div>
        )}
      </div>

      {/* Summary Highlights */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
            <span>Education</span>
          </div>
          <p className="mt-2 text-xs text-slate-300">
            BS Computer Science from Hazara University, Mansehra, Pakistan (Sep 2022 – Jul 2026).
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
            <span>Specialization</span>
          </div>
          <p className="mt-2 text-xs text-slate-300">
            Artificial Intelligence, Machine Learning, Computer Vision, and Data Science.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
            <span>Availability</span>
          </div>
          <p className="mt-2 text-xs text-slate-300">
            {profile.availability}
          </p>
        </div>
      </div>
    </div>
  );
}
