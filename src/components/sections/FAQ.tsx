'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQS = [
  { q: 'Do you work directly with consumers?',             a: 'No. We are strictly B2B. We never contact your clients directly under any circumstances. Your client relationship is 100% yours.' },
  { q: 'Can I resell under my own brand?',                 a: 'Absolutely. Professional+ tiers include full white-labeling — your logo, letterhead, contact info, company name. Zero mention of Rick Jefferson Solutions.' },
  { q: "What if I don't hit the monthly minimum?",         a: "You're billed for the minimum regardless of files submitted. Unused credits roll over for 3 months, so they're never wasted." },
  { q: 'How fast can I get started?',                      a: '3–5 business days from contract signing to your first live batch. We move fast.' },
  { q: 'Do you offer exclusivity in my market?',           a: 'Yes — territory protection is available for Platinum partners. Reach out to discuss your geographic area.' },
  { q: "What if a client isn't satisfied with a file?",    a: "We offer one free revision per file. If the revised version still doesn't meet standards, that file is on us — completely free." },
  { q: 'Can I customize the letter language?',             a: 'Enterprise+ partners can request custom letter templates and language adjustments. We work with your brand voice.' },
  { q: 'Do you handle ongoing dispute rounds?',            a: 'Yes. Round 2 and Round 3 letters are available à la carte or included in your tier. We track dispute timelines for you.' },
  { q: "What's your violation detection accuracy?",        a: '99.7% — verified by third-party audit. Our AI runs every report through all 10 FCRA violation categories simultaneously.' },
  { q: 'Do real attorneys review the documents?',          a: 'Our system is designed and verified by consumer credit attorneys. All FCRA/FDCPA citations are current as of 2026. For actual court filings, we recommend attorney review before submission.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            ❓ FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl text-white mb-4"
          >
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                'glass-card rounded-2xl overflow-hidden transition-all',
                open === i && 'border-violet-500/30',
              )}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-white text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    'text-slate-400 flex-shrink-0 transition-transform duration-200',
                    open === i && 'rotate-180 text-violet-400',
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
