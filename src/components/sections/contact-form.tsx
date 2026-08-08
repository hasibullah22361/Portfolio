'use client';

import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Globe, FileText } from 'lucide-react';
import { profile } from '@/data/profile';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay and form reset
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Left Info Column */}
      <div className="flex flex-col justify-between gap-6 lg:col-span-5">
        <div className="space-y-4">
          <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="rounded-xl border border-slate-700/80 bg-slate-950 p-3 text-cyan-400">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400">Direct Email</h3>
              <p className="mt-1 text-sm font-medium text-white break-all">{profile.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="rounded-xl border border-slate-700/80 bg-slate-950 p-3 text-cyan-400">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</h3>
              <p className="mt-1 text-sm font-medium text-white">{profile.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="rounded-xl border border-slate-700/80 bg-slate-950 p-3 text-cyan-400">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400">Availability</h3>
              <p className="mt-1 text-sm font-medium text-white">{profile.availability}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <FileText className="h-4 w-4 text-cyan-400" />
            <span>Resume & CV</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Download the official verified resume for qualifications and technical experience summary.
          </p>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="portfolio-btn portfolio-btn-secondary mt-4 w-full rounded-xl px-4 py-2.5 text-xs font-semibold"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-400">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Message Ready</h3>
              <p className="mt-2 text-sm text-slate-300 max-w-md">
                Your message has been formatted. Click below to launch your email app and send it directly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a
                  href={mailtoUrl}
                  className="portfolio-btn portfolio-btn-cyan gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                >
                  Open Email Client
                  <Send className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="portfolio-btn portfolio-btn-secondary rounded-xl px-4 py-2.5 text-sm font-medium"
                >
                  Edit Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry, research collaboration, etc."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="portfolio-btn portfolio-btn-cyan mt-2 gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Preparing...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
