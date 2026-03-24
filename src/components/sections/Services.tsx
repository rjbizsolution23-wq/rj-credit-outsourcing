'use client'
import { motion } from 'framer-motion'
import { FileSearch, FileText, Map, Scale, ShieldCheck, Zap } from 'lucide-react'

const SERVICES = [
  {
    icon: FileSearch,
    color: 'from-violet-600 to-violet-400',
    glow:  'rgba(99,91,255,0.2)',
    title: '10-Category FCRA Violation Scan',
    desc:  'Military-grade analysis across all FCRA violation types: accuracy, completeness, obsolete information, re-aging, mixed files, permissible purpose, duplicates, post-charge-off balances, Metro 2® codes, and investigation violations.',
    badge: 'Core Service',
  },
  {
    icon: FileText,
    color: 'from-cyan-600 to-cyan-400',
    glow:  'rgba(0,210,255,0.2)',
    title: 'Attorney-Level Dispute Letters',
    desc:  '7 letter types — FCRA §611 bureau disputes, §623 furnisher disputes, FDCPA §1692g validation, pay-for-delete, goodwill, cease & desist, and unauthorized inquiry removal. Fresh-generated, never templated.',
    badge: '7 Types',
  },
  {
    icon: Map,
    color: 'from-emerald-600 to-teal-400',
    glow:  'rgba(6,214,160,0.2)',
    title: '10-Point Financial Roadmap',
    desc:  'Auto loan approval tiers, mortgage readiness (FHA/VA/Conventional), student loan relief strategies, DTI optimization, business funding outlook, 6/12/24-month score trajectory, and complete action timelines.',
    badge: '10 Points',
  },
  {
    icon: Scale,
    color: 'from-rose-600 to-pink-400',
    glow:  'rgba(244,63,94,0.2)',
    title: 'Federal Court Document Drafting',
    desc:  'FCRA federal complaints ready for U.S. District Court filing, FDCPA complaints, pre-litigation demand letters, CFPB administrative complaints, FTC systematic violation complaints, and State AG filings.',
    badge: '+$97/doc',
  },
  {
    icon: ShieldCheck,
    color: 'from-amber-500 to-orange-400',
    glow:  'rgba(245,158,11,0.2)',
    title: 'White-Label Branding',
    desc:  'Every document delivered with your logo, letterhead, contact information, and company name. Zero mention of Rick Jefferson Solutions. Your clients see only your brand on every page.',
    badge: 'Professional+',
  },
  {
    icon: Zap,
    color: 'from-blue-600 to-indigo-400',
    glow:  'rgba(37,99,235,0.2)',
    title: 'Real-Time Portal & API',
    desc:  'Enterprise partners get a dedicated portal with bulk upload (up to 100 files), real-time status tracking, webhook notifications, Zapier integrations, REST API access, and FTP/SFTP for custom workflows.',
    badge: 'Enterprise+',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            🔬 What We Deliver
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4"
          >
            Complete Credit Repair{' '}
            <span className="gradient-text">Intelligence Engine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            You send us a credit report. We return 5 production-ready documents in 48 hours.
            Every file. Every time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative glass-card rounded-3xl p-7 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1"
              style={{ '--glow': s.glow } as React.CSSProperties}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  style={{ boxShadow: `0 0 20px ${s.glow}` }}>
                  <s.icon size={20} className="text-white" />
                </div>
                <div>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-gradient-to-r ${s.color} text-white`}>
                    {s.badge}
                  </span>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
