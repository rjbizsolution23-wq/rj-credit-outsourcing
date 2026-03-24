'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Zap } from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'
import { TIERS, CALENDLY_URL } from '@/lib/constants'

export default function Pricing() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="pricing" className="py-24 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            💰 Pricing Tiers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4"
          >
            Choose Your{' '}
            <span className="gradient-text">Processing Volume</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            All tiers include complete FCRA violation analysis and attorney-level dispute letters.
            Scale up as your CRO grows.
          </motion.p>
        </div>

        {/* Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {TIERS.map((tier, i) => {
            const isPopular  = tier.tag === 'Most Popular'
            const isElite    = tier.tag === 'Elite'
            const isHovered  = hoveredId === tier.id

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredId(tier.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  'relative flex flex-col rounded-3xl p-6 transition-all duration-300',
                  'bg-[#13131f] border',
                  tier.borderColor,
                  isHovered && 'transform -translate-y-2',
                  isPopular && 'ring-2 ring-violet-500/50 shadow-2xl shadow-violet-500/20',
                  isElite   && 'ring-2 ring-amber-400/50 shadow-2xl shadow-amber-400/15',
                )}
                style={{
                  boxShadow: isHovered
                    ? `0 20px 60px ${tier.glowColor}`
                    : isPopular
                    ? '0 8px 40px rgba(99,91,255,0.15)'
                    : 'none',
                }}
              >
                {/* Tag badge */}
                {tier.tag && (
                  <div className={cn(
                    'absolute -top-3.5 left-1/2 -translate-x-1/2',
                    'px-4 py-1 rounded-full text-xs font-bold text-white',
                    `bg-gradient-to-r ${tier.color}`,
                    'shadow-lg whitespace-nowrap',
                  )}>
                    {tier.emoji} {tier.tag}
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{tier.emoji}</span>
                    <h3 className={cn(
                      'font-display font-bold text-xl text-white',
                    )}>
                      {tier.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={cn(
                      'font-display font-extrabold text-4xl',
                      `bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`,
                    )}>
                      {formatCurrency(tier.pricePerFile)}
                    </span>
                    <span className="text-slate-500 text-sm">/file</span>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    Min {tier.minFiles} files · {formatCurrency(tier.monthlyMin)}/mo min
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-2 py-1 rounded-lg">
                    <Zap size={10} className="text-amber-400" />
                    {tier.turnaround} turnaround
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                  {tier.notIncluded.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <X size={14} className="text-slate-700 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'w-full text-center py-3 px-4 rounded-xl font-semibold text-sm transition-all',
                    isPopular || isElite
                      ? `bg-gradient-to-r ${tier.color} text-white shadow-lg hover:opacity-90`
                      : 'bg-white/8 border border-white/12 text-white hover:bg-white/12',
                  )}
                >
                  {tier.id === 'starter' ? 'Start Free Trial' : 'Book Consultation'}
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Launch Offers Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 border border-amber-400/20"
        >
          <div className="text-center mb-6">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              🔥 Limited Time Launch Offers — March 2026
            </h3>
            <p className="text-slate-400 text-sm">New partners only · Limited spots available</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { code: 'LAUNCH50',     label: '50% Off First Month',    emoji: '🔥' },
              { code: 'WHITELABEL',   label: 'Free White-Label Setup',  emoji: '🎨' },
              { code: 'ENTERPRISE10', label: '10 Free Files',           emoji: '🏢' },
              { code: 'REFER-A-CRO',  label: '$500 Referral Credit',    emoji: '🤝' },
            ].map(offer => (
              <div key={offer.code} className="bg-white/5 border border-white/8 rounded-2xl p-4 text-center">
                <div className="text-2xl mb-2">{offer.emoji}</div>
                <div className="font-semibold text-white text-sm mb-1">{offer.label}</div>
                <div className="font-mono text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded inline-block">
                  {offer.code}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
