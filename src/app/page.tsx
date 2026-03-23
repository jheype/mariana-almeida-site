"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Globe, 
  Award, 
  BookOpen, 
  Scale, 
  GraduationCap, 
  ChevronRight, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Menu,
  X,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  FileText,
  Clock,
  Instagram,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";
import { translations, Language } from "@/lib/translations";
import Image from 'next/image';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('pt');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.profile, href: '#perfil' },
    { name: t.nav.trajectory, href: '#trajetoria' },
    { name: t.nav.achievements, href: '#conquistas' },
    { name: t.nav.services, href: '#servicos' },
    { name: t.nav.contact, href: '#contato' },
  ];

  const scholarships = t.scholarships;
  const services = t.services.serviceList;
  const packages = t.services.packageList;

  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  return (
    <div className="min-h-screen font-sans selection:bg-gold-500/20">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6",
          isScrolled ? "bg-navy-900/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <span className={cn(
              "font-serif text-2xl tracking-widest uppercase transition-colors duration-300",
              isScrolled ? "text-white" : "text-navy-900"
            )}>
              Mariana Almeida
            </span>
            <span className={cn(
              "text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300",
              isScrolled ? "text-gold-500" : "text-navy-800/60"
            )}>
              {t.nav.authority}
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] uppercase tracking-widest font-bold hover:text-gold-500 transition-colors",
                  isScrolled ? "text-white/80" : "text-navy-900/80"
                )}
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLang}
              className={cn(
                "flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold transition-colors",
                isScrolled ? "text-white/80 hover:text-gold-500" : "text-navy-900/80 hover:text-gold-500"
              )}
            >
              <Globe size={14} />
              <span>{lang === 'pt' ? 'EN' : 'PT'}</span>
            </button>

            <a 
              href="#servicos"
              className={cn(
                "px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold border transition-all duration-300",
                isScrolled 
                  ? "border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900" 
                  : "border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
              )}
            >
              {t.nav.mentorship}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleLang}
              className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                isScrolled ? "text-white" : "text-navy-900"
              )}
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className={isScrolled ? "text-white" : "text-navy-900"} /> : <Menu className={isScrolled ? "text-white" : "text-navy-900"} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy-900 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-serif tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F0F2F5]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-offwhite via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920" 
            alt="Mariana Almeida"
            className="w-full h-full object-cover object-center opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">
            <FadeIn delay={0.2}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-[1px] bg-gold-500" />
                <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                  {t.hero.ods}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <h1 className="text-6xl md:text-8xl font-serif text-navy-900 leading-[1.1] mb-8">
                {t.hero.title} <br />
                <span className="italic">{t.hero.subtitle}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-navy-800/70 font-light leading-relaxed mb-12 max-w-xl">
                {t.hero.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#servicos" 
                className="bg-navy-900 text-white px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-navy-800 transition-all flex items-center justify-center group"
              >
                {t.hero.cta_services}
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href="#trajetoria" 
                className="border border-navy-900 text-navy-900 px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-navy-900 hover:text-white transition-all flex items-center justify-center"
              >
                {t.hero.cta_trajectory}
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section id="perfil" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-[4/5] bg-coolgray overflow-hidden">
                  <Image
                    src="/mariana-hero.jpg"
                    alt="Mariana Almeida Professional"
                    width={500}
                    height={625}
                    className="h-full w-full object-cover grayscale"
                    priority
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-gold-500 text-navy-900 p-8 shadow-2xl hidden md:block">
                  <p className="font-serif text-2xl italic">{t.profile.quote}</p>
                </div>
              </div>
            </FadeIn>
            <div>
              <FadeIn>
                <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{t.profile.badge}</span>
                <h2 className="text-5xl font-serif text-navy-900 mb-8">{t.profile.title}</h2>
                <div className="space-y-6 text-navy-800/70 font-light leading-relaxed">
                  <p>{t.profile.p1}</p>
                  <p>{t.profile.p2}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    <div className="border-l-2 border-gold-500 pl-6">
                      <h4 className="font-serif text-xl text-navy-900 mb-2">{t.profile.exp_title}</h4>
                      <p className="text-sm">{t.profile.exp_desc}</p>
                    </div>
                    <div className="border-l-2 border-gold-500 pl-6">
                      <h4 className="font-serif text-xl text-navy-900 mb-2">{t.profile.scholarships_title}</h4>
                      <p className="text-sm">{t.profile.scholarships_desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória Detalhada */}
      <section id="trajetoria" className="section-padding bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <FadeIn>
                <h2 className="text-5xl font-serif mb-8">{t.trajectory.title} <br /><span className="italic text-gold-500">{t.trajectory.subtitle}</span></h2>
                <p className="text-white/50 font-light leading-relaxed">
                  {t.trajectory.description}
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-2 space-y-12">
              {t.trajectory.items.map((exp, i) => (
                <FadeIn key={i} delay={i * 0.2} direction="right">
                  <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-8 group">
                    <div className="max-w-md">
                      <h3 className="text-2xl font-serif mb-2 group-hover:text-gold-500 transition-colors">{exp.title}</h3>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-4">{exp.location} — {exp.role}</p>
                      <p className="text-sm text-white/60 font-light">{exp.desc}</p>
                    </div>
                    <div className="mt-6 md:mt-0">
                      <span className="text-gold-500 font-serif text-xl italic">{exp.period}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conquistas & Bolsas */}
      <section id="conquistas" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn className="max-w-2xl">
              <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{t.achievements.badge}</span>
              <h2 className="text-5xl font-serif text-navy-900">{t.achievements.title}</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center space-x-4 text-navy-900/40">
                <Award size={32} />
                <span className="text-4xl font-serif">12+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">{t.achievements.stat_label.split(' ').map((word, i) => <span key={i}>{word}<br/></span>)}</span>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-900/10 border border-navy-900/10">
            {scholarships.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="bg-white p-10 hover:bg-offwhite transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-gold-500 font-serif text-lg italic">{item.year}</span>
                  <ArrowUpRight className="text-navy-900/20 group-hover:text-gold-500 transition-colors" size={20} />
                </div>
                <h3 className="text-xl font-serif text-navy-900 mb-3 leading-snug">{item.title}</h3>
                <p className="text-xs uppercase tracking-widest text-navy-800/50 font-bold">{item.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços & Mentoria */}
      <section id="servicos" className="section-padding bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <FadeIn>
                <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{t.services.badge}</span>
                <h2 className="text-5xl font-serif mb-8">{t.services.title} <br /><span className="italic">{t.services.subtitle}</span></h2>
                <p className="text-white/50 font-light leading-relaxed mb-12">
                  {t.services.description}
                </p>
                
                <div className="bg-white/5 p-8 border border-white/10">
                  <h4 className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">{t.services.how_to_proceed}</h4>
                  <div className="space-y-6">
                    {t.services.steps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-gold-500 font-serif italic">{step.step}</span>
                        <p className="text-xs text-white/70 leading-relaxed">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {services.map((service, i) => (
                  <FadeIn key={i} delay={i * 0.2} className="bg-white/5 border border-white/10 p-10 hover:border-gold-500/50 transition-all flex flex-col">
                    <div className="flex justify-between items-start mb-8">
                      <h3 className="text-2xl font-serif">{service.title}</h3>
                      <span className="text-gold-500 font-serif text-2xl">{service.price}</span>
                    </div>
                    <div className="flex items-center space-x-4 mb-6 text-white/40">
                      <div className="flex items-center text-[10px] uppercase tracking-widest font-bold">
                        <Clock size={14} className="mr-2" /> {service.duration}
                      </div>
                    </div>
                    <p className="text-sm text-white/70 font-light leading-relaxed mb-8 flex-grow">
                      {service.desc}
                    </p>
                    <p className="text-[10px] text-white/30 italic border-t border-white/10 pt-4">
                      {service.note}
                    </p>
                  </FadeIn>
                ))}
              </div>

              {/* Pricing Packages */}
              <FadeIn delay={0.4}>
                <div className="bg-gold-500 text-navy-900 p-10">
                  <h3 className="text-2xl font-serif mb-8 flex items-center">
                    <ShieldCheck className="mr-3" /> {t.services.packages_title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {packages.map((pkg, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-navy-900/10 pb-4">
                        <span className="text-sm font-bold uppercase tracking-widest">{pkg.name}</span>
                        <span className="font-serif text-xl font-bold">{pkg.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-10 text-[10px] uppercase tracking-widest font-bold opacity-60">
                    {t.services.packages_note}
                  </p>
                </div>
              </FadeIn>

              <div className="mt-12 p-6 border border-white/10 bg-white/5">
                <p className="text-[10px] uppercase tracking-widest text-white/40 text-center">
                  {t.services.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-white text-navy-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <span className="font-serif text-3xl tracking-widest uppercase block mb-4">Mariana Almeida</span>
              <p className="text-navy-900/40 font-light max-w-sm leading-relaxed mb-8">
                {t.footer.description}
              </p>
              <div className="flex space-x-6">
                <a href="https://linkedin.com" className="text-navy-900/60 hover:text-gold-500 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com/myeuropeanjourney" className="text-navy-900/60 hover:text-gold-500 transition-colors flex items-center">
                  <Instagram size={20} className="mr-2" /> <span className="text-[10px] font-bold uppercase tracking-widest">@myeuropeanjourney</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">{t.footer.nav_title}</h4>
              <ul className="space-y-4 text-sm text-navy-900/60">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-navy-900 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">{t.footer.contact_title}</h4>
              <a href="mailto:mariana.europeanjourney@gmail.com" className="text-navy-900 hover:text-gold-500 transition-colors block mb-4 font-serif text-lg">
                mariana.europeanjourney@gmail.com
              </a>
              <p className="text-[10px] uppercase tracking-widest text-navy-900/30">
                Haia | Londres | Salvador
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-navy-900/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-navy-900/30">
              {t.footer.rights}
            </p>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-navy-900/30">
              <ShieldCheck size={12} />
              <span>{t.footer.ods_commit}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
