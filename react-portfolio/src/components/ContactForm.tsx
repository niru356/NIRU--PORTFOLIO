import React, { useState } from 'react';
import type { FormEvent } from 'react';
import FadeIn from './UI/FadeIn';
import MagneticButton from './UI/MagneticButton';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mnpqykwn', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#0C0C0C] relative border-b border-[#D7E2EA]/5">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[30vh] rounded-full bg-[#c4874b]/3 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-16 rounded-[40px] border border-[#D7E2EA]/10 bg-gradient-to-br from-[#D7E2EA]/3 to-transparent">

          {/* Info Side (Left 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <FadeIn delay={0.1} y={20} className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold">
                  Get In Touch
                </span>
              </FadeIn>

              <FadeIn delay={0.2} y={20} className="mb-6">
                <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
                  Let's Work<br />Together
                </h2>
              </FadeIn>

              <FadeIn delay={0.3} y={20} className="mb-8">
                <p className="text-sm md:text-base text-[#D7E2EA]/75 leading-relaxed">
                  I'm currently looking for new opportunities in Data Analysis and Business Intelligence. Let's connect to explore how my skills can bring value to your data pipeline.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} y={20} className="space-y-4 mt-8">
              <a
                href="mailto:rathnirakar655@gmail.com"
                className="flex items-center gap-4 group text-[#D7E2EA]/80 hover:text-[#D7E2EA] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D7E2EA]/5 flex items-center justify-center text-sm border border-[#D7E2EA]/10 group-hover:border-[#D7E2EA]/30 transition-colors">
                  <img src="/gmail.png" alt="Gmail" className="w-6 h-6 glow-text" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#D7E2EA]/50 uppercase tracking-widest font-semibold">Email</span>
                  <span className="text-sm font-semibold">rathnirakar655@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#D7E2EA]/85">
                <div className="w-10 h-10 rounded-xl bg-[#D7E2EA]/5 flex items-center justify-center text-sm border border-[#D7E2EA]/10">
                  <img src="/location.png" alt="Location" className="w-6 h-6 glow-text" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#D7E2EA]/50 uppercase tracking-widest font-semibold">Location</span>
                  <span className="text-sm font-semibold">Odisha, India</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Side (Right 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeIn delay={0.3} y={30} className="w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-semibold text-[#D7E2EA]/50">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/20 focus:outline-none focus:border-[#D7E2EA]/40 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-semibold text-[#D7E2EA]/50">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/20 focus:outline-none focus:border-[#D7E2EA]/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-semibold text-[#D7E2EA]/50">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/20 focus:outline-none focus:border-[#D7E2EA]/40 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
                  <MagneticButton className="w-full sm:w-auto">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto px-8 py-4 bg-[#D7E2EA] hover:bg-[#D7E2EA]/90 text-[#0C0C0C] font-semibold text-xs tracking-widest uppercase rounded-full transition-all duration-300 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </MagneticButton>

                  {status === 'success' && (
                    <p className="text-xs font-semibold text-emerald-400">
                      <i className="fa-solid fa-circle-check mr-2" /> Message sent successfully!
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-xs font-semibold text-rose-400">
                      <i className="fa-solid fa-circle-exclamation mr-2" /> Failed to send message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
