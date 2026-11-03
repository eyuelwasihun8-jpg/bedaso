import { useState } from "react";
import { images } from "../images";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

function AnimatedDiv({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", division: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hello Bedhaso Abdella Import & Export,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nDivision: ${formData.division}\nMessage: ${formData.message}`);
    window.open(`https://wa.me/251915018916?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <PageHero image={images.contactHero} title="Contact Us" subtitle="Get in touch with Bedhaso Abdella Import & Export General Trading" breadcrumb="Reach Out" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Get in Touch" title="We'd Love to Hear from You" subtitle="Whether you need Ethiopian coffee, construction materials, vehicles, or logistics — our team is ready to help." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, title: "Call Us", lines: ["+251 915 018 916", "+251 915 444 546"], color: "bg-primary/10 text-primary" },
              { icon: Mail, title: "Email Us", lines: ["info@bedhasoimportexport.com"], color: "bg-amber-500/10 text-amber-600" },
              { icon: MapPin, title: "Head Office", lines: ["Kezira, Dire Dawa, Ethiopia"], color: "bg-teal-500/10 text-teal-600" },
              { icon: Clock, title: "Working Hours", lines: ["Mon – Sat: 8:00 AM – 6:00 PM", "Sun: Closed"], color: "bg-indigo-500/10 text-indigo-600" },
            ].map((card, idx) => (
              <AnimatedDiv key={card.title} delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group h-full">
                  <div className={`w-14 h-14 mx-auto rounded-2xl ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><card.icon size={24} /></div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  {card.lines.map((line) => (<p key={line} className="text-gray-600 text-sm">{line}</p>))}
                </div>
              </AnimatedDiv>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedDiv>
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm mb-6">Fill out the form and we'll respond via WhatsApp or email.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" placeholder="Your full name" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" placeholder="email@example.com" /></div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" placeholder="+251 …" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label><input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" placeholder="What is this about?" /></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Which Division?</label>
                      <select value={formData.division} onChange={(e) => setFormData({ ...formData, division: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none text-sm bg-white">
                        <option value="">Select a division</option>
                        <option value="Coffee">Iconbuna Coffee Export</option>
                        <option value="Import">Import Division</option>
                        <option value="Export">Export Division</option>
                        <option value="Real Estate">Real Estate Division</option>
                        <option value="Logistics">Transport & Logistics</option>
                      </select>
                    </div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label><textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none text-sm resize-none" placeholder="Tell us how we can help you…" /></div>
                    <button type="submit" disabled={submitted} className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                      {submitted ? "✓ Opening WhatsApp…" : <><Send size={18} /> Send Message via WhatsApp</>}
                    </button>
                  </form>
                </div>
              </AnimatedDiv>
            </div>

            {/* Sidebar with Socials and Map */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedDiv delay={200}>
                {/* Social Links */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Connect With Us</h3>
                  <div className="flex gap-4">
                    {/* WhatsApp */}
                    <a href="https://wa.me/251915018916" target="_blank" rel="noreferrer" className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="WhatsApp">
                      <MessageCircle size={22} />
                    </a>
                    {/* Telegram */}
                    <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Telegram">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.27 1.25-.99 1.56-2.02.97l-3.01-2.22-1.45 1.4c-.16.16-.3.29-.61.29l.21-3.05 5.56-5.02c.24-.22-.05-.34-.37-.14l-6.87 4.33-2.96-.92c-.64-.2-.65-.64.13-.95l11.57-4.46c.53-.2.99.13.82.89z"/></svg>
                    </a>
                    {/* Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Facebook">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="LinkedIn">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Google Map */}
                <div className="bg-gray-50 rounded-2xl p-4 h-[350px] overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11523450917!2d38.70881373516568!3d9.010793444439063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: '0.75rem' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}