/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Github, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Code2, 
  Terminal, 
  Languages as LanguagesIcon,
  GraduationCap,
  Briefcase,
  Layers,
  ChevronRight,
  ExternalLink,
  Send
} from 'lucide-react';
import { motion } from 'motion/react';

function SectionTitle({ children, icon: Icon }: { children: React.ReactNode, icon: any }) {
  return (
    <div className="flex items-center gap-2 mb-4 border-b border-zinc-100 pb-2">
      <div className="p-1.5 bg-zinc-900 rounded-md">
        <Icon className="w-3 h-3 text-white" />
      </div>
      <h2 className="text-[11px] font-black text-zinc-900 tracking-[0.2em] uppercase">{children}</h2>
    </div>
  );
}

function SkillBadge({ children }: { children: React.ReactNode, key?: React.Key }) {
  return (
    <span className="px-2 py-1 bg-zinc-50 text-zinc-700 rounded text-[9px] font-bold border border-zinc-100 shadow-sm">
      {children}
    </span>
  );
}

export default function App() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f4f4f5] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white py-8 md:py-12 print:p-0 print:m-0 print:bg-white">
      
      {/* Floating Download Button */}
      <motion.button
        onClick={handleDownload}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="no-print fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-zinc-800 transition-all font-bold text-xs tracking-tight group"
      >
        <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        Download Resume
      </motion.button>

      {/* Main Resume Container */}
      <div className="resume-page mx-auto shadow-[0_0_50px_rgba(0,0,0,0.1)] bg-white overflow-hidden flex flex-col">
        
        {/* Top Header Bar */}
        <header className="flex items-center justify-between mb-10 border-b-4 border-zinc-900 pb-8">
          <div className="flex gap-6 items-center">
            <div className="relative">
              <img 
                src="https://avatars.githubusercontent.com/u/112541611" 
                alt="Amit Das" 
                referrerPolicy="no-referrer"
                className="w-24 h-24 rounded-2xl object-cover border-2 border-zinc-900 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-zinc-900 text-white p-1.5 rounded-lg">
                <Code2 className="w-3 h-3" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-zinc-900 leading-none mb-2">
                AMIT DAS
              </h1>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-zinc-900 text-white text-[8px] font-black uppercase tracking-widest">
                  Full Stack Developer
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                  & Automation Expert
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1.5 text-right">
            <a href="mailto:info@amitdas.site" className="flex items-center justify-end gap-2 text-[10px] font-bold text-zinc-600 hover:text-zinc-900">
              info@amitdas.site <Mail className="w-3 h-3" />
            </a>
            {/* <a href="tel:+91XXXXXXXXXX" className="flex items-center justify-end gap-2 text-[10px] font-bold text-zinc-600 hover:text-zinc-900">
              +91 XXXXXXXXXX <Phone className="w-3 h-3" />
            </a> */}
            <a href="https://t.me/AmitDas4321" target="_blank" className="flex items-center justify-end gap-2 text-[10px] font-bold text-zinc-600 hover:text-zinc-900">
              @AmitDas4321 <Send className="w-3 h-3" />
            </a>
            <div className="flex items-center justify-end gap-2 text-[10px] font-bold text-zinc-600">
              Bankura, WB, India <MapPin className="w-3 h-3" />
            </div>
            <div className="flex justify-end gap-2 mt-1">
              <a href="https://github.com/AmitDas4321" target="_blank" className="text-zinc-400 hover:text-zinc-900"><Github className="w-3.5 h-3.5" /></a>
              <a href="https://amitdas.site" target="_blank" className="text-zinc-400 hover:text-zinc-900"><Globe className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8 flex-1">
          
          {/* Left Column (35%) */}
          <aside className="col-span-4 space-y-10 border-r border-zinc-100 pr-8">
            
            <section>
              <SectionTitle icon={Terminal}>Profile</SectionTitle>
              <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">
                Independent developer specializing in high-efficiency backend systems and automated workflows. Expert in PHP, Node.js and Python, with a focus on scalable cloud deployments.
              </p>
            </section>

            <section>
              <SectionTitle icon={Code2}>Technical Stack</SectionTitle>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['JavaScript', 'Python', 'PHP', 'HTML5', 'CSS3'].map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mb-2">Infrastructure</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Node.js', 'Cloudflare', 'Git', 'REST APIs', 'MySQL', 'Firebase'].map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <SectionTitle icon={GraduationCap}>Education</SectionTitle>
              <div className="space-y-3">
                <div className="border-l-2 border-zinc-900 pl-3">
                  <h3 className="text-[10px] font-black text-zinc-900">BCA</h3>
                  <p className="text-[9px] text-zinc-500 font-bold">Manipal University Jaipur</p>
                  <p className="text-[8px] text-zinc-400 font-black mt-1 uppercase">2021 — 2024</p>
                </div>
              </div>
            </section>

            <section>
              <SectionTitle icon={LanguagesIcon}>Languages</SectionTitle>
              <div className="space-y-2">
                {['Bengali', 'Hindi', 'English'].map(lang => (
                  <div key={lang} className="flex items-center justify-between text-[9px] font-bold text-zinc-600">
                    <span>{lang}</span>
                    <div className="w-12 h-0.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-zinc-900" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-4">
              <div className="bg-zinc-900 p-4 rounded-xl text-white">
                <h3 className="text-[9px] font-black uppercase tracking-widest mb-2">Availability</h3>
                <p className="text-[8px] text-zinc-400 font-medium leading-tight">
                  Open for full-time roles and high-impact freelance projects.
                </p>
              </div>
            </section>
          </aside>

          {/* Right Column (65%) */}
          <main className="col-span-8 space-y-10">
            
            <section>
              <SectionTitle icon={Briefcase}>Experience</SectionTitle>
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-black text-zinc-900 uppercase tracking-tight">Independent Developer</h3>
                    <span className="text-[8px] font-black bg-zinc-100 px-2 py-0.5 rounded uppercase">2021 — PRESENT</span>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Architected high-traffic Telegram bots with sub-second response times.",
                      "Engineered robust backend APIs using PHP, Node.js, and Cloudflare Workers.",
                      "Developed custom automation scripts for complex web interactions.",
                      "Built responsive, mobile-first frontend interfaces for diverse clients."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-[10px] text-zinc-500 font-medium leading-snug">
                        <ChevronRight className="w-3 h-3 text-zinc-900 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <SectionTitle icon={Layers}>Selected Works</SectionTitle>
              <div className="grid grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:border-zinc-900 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[11px] font-black text-zinc-900 tracking-tight uppercase">ReactPulse-TG</h3>
                    <a href="https://github.com/AmitDas4321/ReactPulse-TG" target="_blank" className="text-zinc-400 hover:text-zinc-900"><Github className="w-3 h-3" /></a>
                  </div>
                  <p className="text-[9px] text-zinc-500 font-medium leading-relaxed mb-3">
                    Telegram auto-reaction system deployed on Cloudflare Workers.
                  </p>
                  <div className="flex gap-1.5">
                    {['Workers', 'API'].map(t => <span key={t} className="text-[7px] font-black uppercase text-zinc-400 border border-zinc-200 px-1 rounded">{t}</span>)}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:border-zinc-900 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[11px] font-black text-zinc-900 tracking-tight uppercase">LoveConnect</h3>
                    <ExternalLink className="w-3 h-3 text-zinc-300" />
                  </div>
                  <p className="text-[9px] text-zinc-500 font-medium leading-relaxed mb-3">
                    Secure landing platform with phone-based OTP authentication.
                  </p>
                  <div className="flex gap-1.5">
                    {['Tailwind', 'Auth'].map(t => <span key={t} className="text-[7px] font-black uppercase text-zinc-400 border border-zinc-200 px-1 rounded">{t}</span>)}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:border-zinc-900 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[11px] font-black text-zinc-900 tracking-tight uppercase">NGL-Spammer</h3>
                    <a href="https://github.com/AmitDas4321/NGL-Spammer" target="_blank" className="text-zinc-400 hover:text-zinc-900"><Github className="w-3 h-3" /></a>
                  </div>
                  <p className="text-[9px] text-zinc-500 font-medium leading-relaxed mb-3">
                    Advanced Python automation script for high-volume message delivery with proxy rotation.
                  </p>
                  <div className="flex gap-1.5">
                    {['Python', 'Automation', 'Proxies'].map(t => <span key={t} className="text-[7px] font-black uppercase text-zinc-400 border border-zinc-200 px-1 rounded">{t}</span>)}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:border-zinc-900 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[11px] font-black text-zinc-900 tracking-tight uppercase">GitHub Profile Views Counter</h3>
                    <a href="https://github.com/BlueOrbitDevs/GitHub-Profile-Views-Counter" target="_blank" className="text-zinc-400 hover:text-zinc-900"><Github className="w-3 h-3" /></a>
                  </div>
                  <p className="text-[9px] text-zinc-500 font-medium leading-relaxed mb-3">
                    Simple and customizable GitHub profile view counter using badges to track and display visitor stats.
                  </p>
                  <div className="flex gap-1.5">
                    {['JavaScript', 'GitHub API', 'Badge'].map(t => <span key={t} className="text-[7px] font-black uppercase text-zinc-400 border border-zinc-200 px-1 rounded">{t}</span>)}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:border-zinc-900 transition-colors col-span-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[11px] font-black text-zinc-900 tracking-tight uppercase">Feedback Collector (No Backend)</h3>
                    <a href="https://github.com/AmitDas4321/Collect-Feedback-Without-a-Backend" target="_blank" className="text-zinc-400 hover:text-zinc-900"><Github className="w-3 h-3" /></a>
                  </div>
                  <p className="text-[9px] text-zinc-500 font-medium leading-relaxed mb-3">
                    Collect user feedback without building a backend — uses simple forms and external services to store responses.
                  </p>
                  <div className="flex gap-1.5">
                    {['HTML', 'JS', 'Forms', 'No Backend'].map(t => <span key={t} className="text-[7px] font-black uppercase text-zinc-400 border border-zinc-200 px-1 rounded">{t}</span>)}
                  </div>
                </div>

              </div>
            </section>

            <section className="pt-4">
              <div className="border-2 border-dashed border-zinc-100 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <h3 className="text-[10px] font-black text-zinc-900 uppercase">Portfolio Site</h3>
                  <p className="text-[9px] text-zinc-400 font-bold">Explore more projects online</p>
                </div>
                <a href="https://amitdas.site" target="_blank" className="bg-zinc-900 text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                  www.amitdas.site <ExternalLink className="w-3 h-3 inline-block ml-1" />
                </a>
              </div>
            </section>
          </main>
        </div>

      </div>
    </div>
  );
}
