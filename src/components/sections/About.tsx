'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { label: 'Agent Systems', value: '201+' },
  { label: 'Success Rate', value: '98%' },
  { label: 'Files Processed', value: '50k+' },
  { label: 'Team Experience', value: '15yr+' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 font-mono">
                About RJ Business Solutions
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Supreme Autonomous systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                by Rick Jefferson
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              RJ Business Solutions is a premier AGI-level architecture firm specializing in full-stack autonomous systems. 
              Led by Rick Jefferson, we deploy a sophisticated 201-agent framework designed to handle mission-critical 
              B2B credit repair processing, data engineering, and cloud security at scale.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center text-xl">📍</div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Office</div>
                  <div className="text-sm text-slate-300 font-mono">1342 NM 333, Tijeras, NM 87059</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center text-xl">📧</div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Contact</div>
                  <div className="text-sm text-slate-300 font-mono">rjbizsolution23@gmail.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Personal Brand / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-sm overflow-hidden group">
              {/* Profile Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-5xl mb-6 shadow-2xl shadow-violet-500/20">
                  👨‍💻
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">Rick Jefferson</h3>
                <p className="text-violet-400 font-mono text-sm mb-6 uppercase tracking-widest px-4 border-b border-violet-500/30 pb-4">
                  AGI-Level Prompt Architect | Data Engineer
                </p>
                
                <p className="text-slate-400 text-sm italic mb-8 max-w-sm">
                  "No task escapes the framework. No output ships without passing all quality gates. 
                  We don't build MVPs; we ship production-grade systems instantly."
                </p>

                <div className="flex gap-4">
                  {['github', 'linkedin', 'twitter'].map(platform => (
                    <div key={platform} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">
                      <span className="text-lg opacity-50 group-hover:opacity-100">
                        {platform === 'github' ? '📦' : platform === 'linkedin' ? '🔗' : '🐦'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/[0.02] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
