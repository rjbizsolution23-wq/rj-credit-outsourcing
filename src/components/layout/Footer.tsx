import Link from 'next/link'
import { CALENDLY_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-xl shadow-lg shadow-violet-500/20">
                🚀
              </div>
              <div>
                <div className="text-md font-bold text-white font-display uppercase tracking-tight">RJ Business Solutions</div>
                <div className="text-[10px] text-violet-400 font-mono uppercase tracking-widest">Supreme Autonomous Systems</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mb-6">
              Empowering agencies with AGI-level architecture. Full-stack excellence, 
              custom autonomous agents, and military-grade security.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="text-violet-500">📍</span> 1342 NM 333, Tijeras, New Mexico 87059
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="text-violet-500">📧</span> rjbizsolution23@gmail.com
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="text-violet-500">📞</span> +1 (414) 430-4277
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Services</h4>
            <ul className="space-y-2">
              {['FCRA Violation Analysis', 'Dispute Letter Generation', 'Financial Roadmaps', 'Court Document Drafting', 'White-Label Branding', 'API Integration'].map(s => (
                <li key={s}>
                  <a href="#services" className="text-sm text-slate-500 hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About',          href: '#about' },
                { label: 'Pricing',        href: '#pricing' },
                { label: 'ROI Calculator', href: '#roi' },
                { label: 'Process',        href: '#process' },
                { label: 'FAQ',            href: '#faq' },
                { label: 'Book Consultation', href: CALENDLY_URL },
                { label: 'MyFreeScoreNow', href: 'https://myfreescorenow.guru/epi' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700 font-mono">
            © 2026 RJ Business Solutions. All rights reserved. · Built by Rick Jefferson · AID: RickJeffersonSolutions
          </p>
          <p className="text-xs text-slate-800 font-mono text-center">
            GLBA Compliant · SOC 2 in Progress Q3 2026 · TLS 1.3 · 256-bit AES
          </p>
        </div>
      </div>
    </footer>
  )
}
