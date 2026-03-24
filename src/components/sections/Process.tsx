'use client'
import { motion } from 'framer-motion'
import { Calendar, FileSignature, Settings, Rocket } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/constants'

const STEPS = [
  {
    number: '01',
    icon: Calendar,
    title: 'Consultation Call',
    time: '30 minutes',
    color: 'from-violet-600 to-violet-400',
    items: [
      'Discuss your volume needs',
      'Review tier options together',
      'Answer every question you have',
      'No pressure, no hard sell',
    ],
  },
  {
    number: '02',
    icon: FileSignature,
    title: 'Agreement Signing',
    time: 'Same day',
    color: 'from-cyan-600 to-cyan-400',
    items: [
      'Digital contract via DocuSign',
      'Master Service Agreement',
      'Mutual NDA signed',
      'Payment terms confirmed',
    ],
  },
  {
    number: '03',
    icon: Settings,
    title: 'Setup & Onboarding',
    time: '2–3 business days',
    color: 'from-emerald-600 to-teal-400',
    items: [
      'Portal access provisioned',
      'White-label branding applied',
      '30–60 min training session',
      'Test file processed FREE',
    ],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Go Live',
    time: 'Immediate',
    color: 'from-amber-500 to-orange-400',
    items: [
      'Submit your first batch',
      'Receive completed files',
      'Feedback loop open',
      'Ongoing support active',
    ],
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            📋 Onboarding Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4"
          >
            Live in{' '}
            <span className="gradient-text-gold">3–5 Business Days</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass-card rounded-3xl p-7"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-xl bg-[#0a0a0f] border border-white/10 flex items-center justify-center">
                <span className="text-xs font-bold font-mono text-slate-400">{step.number}</span>
              </div>

              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                <step.icon size={22} className="text-white" />
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-1">{step.title}</h3>
              <div className="text-xs font-mono text-slate-500 mb-4">⏱ {step.time}</div>

              <ul className="space-y-2">
                {step.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold shadow-2xl shadow-violet-500/25 hover:opacity-90 transition-all"
          >
            <Calendar size={18} />
            Book Your Consultation Now
          </a>
          <p className="text-sm text-slate-600 mt-3 font-mono">
            Total onboarding: 3–5 business days · First 5 files FREE
          </p>
        </motion.div>
      </div>
    </section>
  )
}
