'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Calculator } from 'lucide-react'
import { VOLUME_TIERS } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

function getPricePerFile(files: number): number {
  for (const tier of VOLUME_TIERS) {
    if (tier.price && files >= tier.min && (tier.max === null || files <= tier.max)) {
      return tier.price
    }
  }
  return 37
}

export default function ROICalculator() {
  const [files,      setFiles]      = useState(50)
  const [clientRate, setClientRate] = useState(150)

  const pricePerFile = getPricePerFile(files)

  const calc = useMemo(() => {
    const cost     = files * pricePerFile
    const revenue  = files * clientRate
    const profit   = revenue - cost
    const margin   = revenue > 0 ? Math.round((profit / revenue) * 100) : 0
    const annual   = profit * 12
    return { cost, revenue, profit, margin, annual, pricePerFile }
  }, [files, pricePerFile, clientRate])

  return (
    <section id="roi" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Calculator size={11} />
            ROI Calculator
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4"
          >
            How Much Will{' '}
            <span className="gradient-text">You Make?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Adjust the sliders to see your real profit potential when you outsource processing to us.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 lg:p-12 glow-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-300">
                    Files Per Month
                  </label>
                  <span className="font-mono font-bold text-violet-400 text-lg">
                    {files}
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={1000}
                  step={10}
                  value={files}
                  onChange={e => setFiles(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: '#635bff' }}
                />
                <div className="flex justify-between text-xs text-slate-600 mt-1 font-mono">
                  <span>10</span><span>500</span><span>1,000</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-300">
                    Your Price to Clients
                  </label>
                  <span className="font-mono font-bold text-cyan-400 text-lg">
                    {formatCurrency(clientRate)}/file
                  </span>
                </div>
                <input
                  type="range"
                  min={75}
                  max={500}
                  step={5}
                  value={clientRate}
                  onChange={e => setClientRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: '#00d2ff' }}
                />
                <div className="flex justify-between text-xs text-slate-600 mt-1 font-mono">
                  <span>$75</span><span>$250</span><span>$500</span>
                </div>
              </div>

              {/* Your tier indicator */}
              <div className="bg-white/5 border border-white/8 rounded-2xl p-4">
                <div className="text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">Your Processing Rate</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-extrabold text-violet-400">
                    {formatCurrency(calc.pricePerFile)}
                  </span>
                  <span className="text-slate-500 text-sm">/file</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {files < 50 ? 'Starter/Professional rate' :
                   files < 100 ? 'Volume discount applied (8% off)' :
                   files < 200 ? 'Enterprise rate (27% off)' :
                   files < 500 ? 'High-volume rate (32% off)' :
                   'Platinum rate (41% off)'}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {[
                {
                  label: 'Your Monthly Cost',
                  value: formatCurrency(calc.cost),
                  sub: `${files} files × ${formatCurrency(calc.pricePerFile)}`,
                  color: 'text-red-400',
                  bg:    'bg-red-500/8 border-red-500/20',
                  icon:  '↓',
                },
                {
                  label: 'Your Monthly Revenue',
                  value: formatCurrency(calc.revenue),
                  sub:   `${files} files × ${formatCurrency(clientRate)} (your rate)`,
                  color: 'text-cyan-400',
                  bg:    'bg-cyan-500/8 border-cyan-500/20',
                  icon:  '↑',
                },
                {
                  label: 'Monthly Profit',
                  value: formatCurrency(calc.profit),
                  sub:   `${calc.margin}% margin`,
                  color: 'text-emerald-400',
                  bg:    'bg-emerald-500/10 border-emerald-500/30',
                  icon:  '✓',
                  large: true,
                },
                {
                  label: 'Annual Profit',
                  value: formatCurrency(calc.annual),
                  sub:   'Without hiring anyone',
                  color: 'text-amber-400',
                  bg:    'bg-amber-500/8 border-amber-500/20',
                  icon:  '🏆',
                  large: true,
                },
              ].map(item => (
                <div
                  key={item.label}
                  className={`rounded-2xl p-4 border ${item.bg} transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5 font-mono">{item.label}</div>
                      <div className={`font-display font-extrabold ${item.large ? 'text-3xl' : 'text-2xl'} ${item.color}`}>
                        {item.value}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">{item.sub}</div>
                    </div>
                    <div className={`text-2xl ${item.color}`}>{item.icon}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 pt-8 border-t border-white/8 text-center">
            <p className="text-slate-400 text-sm mb-4">
              At <strong className="text-white">{files} files/month</strong>, you pocket{' '}
              <strong className="text-emerald-400">{formatCurrency(calc.profit)}/month</strong> while we do the work.
              Your team focuses on client relationships.
            </p>
            <a
              href="https://rickjeffersonsolutions.com/trial"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-500 text-white font-bold shadow-lg shadow-emerald-500/25 hover:opacity-90 transition-all"
            >
              <TrendingUp size={16} />
              Start Free — Process 5 Files
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
