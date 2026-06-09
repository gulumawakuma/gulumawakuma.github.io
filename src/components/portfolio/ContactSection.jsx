import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Terminal, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/gulumawakuma" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/guluma-wakuma-olansa" },
  { icon: Mail, label: "Email", href: "mailto:gulumawakuma3@gmail.com" },
  { icon: MessageCircle, label: "Telegram", href: "https://t.me/gule_wako" },
  { icon: Facebook, label: "Facebook", href: "https://web.facebook.com/wako430" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/gulewako" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <Motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] text-primary mb-4"
            >
              GET IN TOUCH
            </Motion.p>
            <Motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-[-0.04em] mb-6"
            >
              Let's Build<br />
              <span className="text-accent">Together</span>
            </Motion.h2>
            <Motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-10 max-w-md"
            >
              Whether you need a scalable web platform, a native iOS app, or a technical 
              partner for your next venture — I'm ready to collaborate. Drop me a message 
              and let's create something exceptional.
            </Motion.p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socials.map((s, i) => (
                <Motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  title={s.label}
                >
                  <s.icon size={18} />
                </Motion.a>
              ))}
            </div>
            <Motion.a
              href="https://wa.me/+251934437389"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-mono tracking-wider hover:bg-primary/10 transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp: +251 934 437 389
            </Motion.a>
          </div>

          {/* Right - Terminal Form */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Terminal window */}
            <div className="rounded-2xl border border-border overflow-hidden bg-card">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
                    <Terminal size={10} className="inline mr-1" />
                    gulumawakuma3@gmail.com
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-widest text-primary">
                    $ whoami
                  </label>
                  <Input
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="bg-muted/30 border-border font-mono text-sm placeholder:text-muted-foreground/40"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-widest text-primary">
                    $ mail --from
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-muted/30 border-border font-mono text-sm placeholder:text-muted-foreground/40"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-widest text-primary">
                    $ git commit -m
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-muted/30 border-border font-mono text-sm placeholder:text-muted-foreground/40 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-mono font-semibold tracking-wider"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-pulse">Transmitting...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={14} />
                      PUSH MESSAGE
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}