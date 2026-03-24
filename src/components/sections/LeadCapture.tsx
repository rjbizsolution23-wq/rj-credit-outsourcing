'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const schema = z.object({
  name:    z.string().min(2,  'Name required'),
  email:   z.string().email('Valid email required'),
  company: z.string().min(2,  'Company name required'),
  volume:  z.string().min(1,  'Select monthly volume'),
  tier:    z.string().min(1,  'Select a tier'),
  message: z.string().max(2000).optional(),
})
type FormData = z.infer<typeof schema>

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      toast.success('Inquiry sent! We\'ll be in touch within 4 hours.')
    } catch {
      toast.error('Something went wrong. Email us directly: partners@rickjeffersonsolutions.com')
    }
  }

  const inputCls = cn(
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3',
    'text-white placeholder-slate-600 text-sm outline-none',
    'focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all',
  )

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-4xl text-white mb-3"
          >
            Request a{' '}
            <span className="gradient-text">Custom Quote</span>
          </motion.h2>
          <p className="text-slate-400 text-base">
            Tell us about your volume. We'll respond within 4 business hours with a tailored proposal.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-3xl p-12 text-center glow-border"
          >
            <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl text-white mb-2">You're on our radar!</h3>
            <p className="text-slate-400">
              Expect a response within 4 business hours. Check your email for a confirmation.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card rounded-3xl p-8 glow-border space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Your Name *</label>
                <input {...register('name')} className={inputCls} placeholder="John Smith" />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Business Email *</label>
                <input {...register('email')} type="email" className={inputCls} placeholder="you@company.com" />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">CRO Company Name *</label>
              <input {...register('company')} className={inputCls} placeholder="Your Credit Repair Company" />
              {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company.message}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Monthly File Volume *</label>
                <select {...register('volume')} className={cn(inputCls, 'cursor-pointer')}>
                  <option value="" className="bg-[#13131f]">Select volume...</option>
                  <option value="10-24"   className="bg-[#13131f]">10–24 files/month</option>
                  <option value="25-49"   className="bg-[#13131f]">25–49 files/month</option>
                  <option value="50-99"   className="bg-[#13131f]">50–99 files/month</option>
                  <option value="100-199" className="bg-[#13131f]">100–199 files/month</option>
                  <option value="200-499" className="bg-[#13131f]">200–499 files/month</option>
                  <option value="500+"    className="bg-[#13131f]">500+ files/month</option>
                </select>
                {errors.volume && <p className="text-xs text-red-400 mt-1">{errors.volume.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Tier Interest *</label>
                <select {...register('tier')} className={cn(inputCls, 'cursor-pointer')}>
                  <option value=""             className="bg-[#13131f]">Select tier...</option>
                  <option value="starter"      className="bg-[#13131f]">Starter ($47/file)</option>
                  <option value="professional" className="bg-[#13131f]">Professional ($37/file)</option>
                  <option value="enterprise"   className="bg-[#13131f]">Enterprise ($27/file)</option>
                  <option value="platinum"     className="bg-[#13131f]">Platinum ($22/file)</option>
                  <option value="custom"       className="bg-[#13131f]">Custom Volume</option>
                </select>
                {errors.tier && <p className="text-xs text-red-400 mt-1">{errors.tier.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Additional Info (optional)</label>
              <textarea {...register('message')} rows={3} className={inputCls} placeholder="Tell us about your CRO, any special requirements, or questions..." />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-base shadow-2xl shadow-violet-500/25 hover:opacity-90 disabled:opacity-60 transition-all"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <>
                  <Send size={16} />
                  Get My Custom Quote
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}
