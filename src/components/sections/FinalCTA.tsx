'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-transparent to-cyan-950/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2rem] p-12 lg:p-16 glow-border"
        >
          <div className="text-5xl mb-6 float-anim">⚖️</div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Ready to{' '}
            <span className="gradient-text">3X Your CRO Revenue</span>
            <br />in 90 Days?
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop being the bottleneck in your own business. Let Rick Jefferson's Supreme Credit Master AGI
            handle the processing while you focus on what matters — growing your client base and closing new deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-base shadow-2xl shadow-violet-500/30 hover:opacity-90 transition-all pulse-glow"
            >
              Book Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://rickjeffersonsolutions.com/trial"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl border border-white/15 text-white font-semibold text-base hover:bg-white/5 transition-all"
            >
              Start with 5 Free Files
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-violet-400" />
              <span>(555) 867-5309</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-violet-400" />
              <a href="mailto:partners@rickjeffersonsolutions.com" className="hover:text-white transition-colors">
                partners@rickjeffersonsolutions.com
              </a>
            </div>
          </div>

          {/* Rick branding */}
          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-xs text-slate-700 font-mono">
              Built by Rick Jefferson · RJ Business Solutions · 1342 NM 333, Tijeras, New Mexico 87059
              <br />
              Affiliate ID: RickJeffersonSolutions · PID: 49914 ·{' '}
              <a href="https://myfreescorenow.guru/epi" className="text-violet-600 hover:text-violet-400 transition-colors">
                MyFreeScoreNow Epic Pro
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
