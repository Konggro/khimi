import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ContactPageProps {
  t: {
    contact: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      contactInfo: string;
      location: string;
      officeAddress: string;
      office: string;
      email: string;
      phone: string;
      sendMessage: string;
      name: string;
      yourName: string;
      yourEmail: string;
      subject: string;
      messageSubject: string;
      message: string;
      yourMessage: string;
      send: string;
      officeHours: string;
      mondayFriday: string;
      businessHours: string;
      responseTime: string;
      responseTimeInfo: string;
      firstName: string;
      lastName: string;
      company: string;
      companyPlaceholder: string;
      saturdaySunday: string;
      closed: string;
    };
  };
}

export function ContactPage({ t }: ContactPageProps) {
  const c = t.contact;
  const contactInfo = [
    { icon: Phone, title: c.phone, detail: '+976 8804 2323', link: 'tel:+97688042323' },
    { icon: Mail, title: c.email, detail: 'info@khimiconsulting.mn', link: 'mailto:info@khimiconsulting.mn' },
    { icon: MapPin, title: c.office, detail: c.officeAddress, link: '#' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">
            <span className="text-[#00d4ff]">{c.title}</span> {c.titleHighlight}
          </h1>
          <p className="max-w-2xl mx-auto text-[#94a3b8]">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 mb-8">
              <h2 className="mb-6 text-[#00d4ff]">{c.contactInfo}</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a0f]/50 hover:bg-[#0a0a0f]/70 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00d4ff]/20 transition-colors glow-effect">
                      <info.icon className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <div>
                      <div className="text-[#94a3b8] mb-1">{info.title}</div>
                      <div className="group-hover:text-[#00d4ff] transition-colors">
                        {info.detail}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-3xl overflow-hidden h-64"
            >
              <div className="w-full h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1512686096451-a15c19314d59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaG5vbG9neSUyMGJsdWV8ZW58MXx8fHwxNzYxNjY0MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Location"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#00d4ff] mx-auto mb-2" />
                    <div className="text-[#00d4ff]">{c.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="mb-6 text-[#00d4ff]">{c.sendMessage}</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-[#94a3b8]">{c.firstName}</label>
                  <Input
                    type="text"
                    placeholder={c.yourName}
                    className="bg-[#0a0a0f]/50 border-[#00d4ff]/20 text-[#e0e7ff] placeholder:text-[#94a3b8] focus:border-[#00d4ff]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#94a3b8]">{c.lastName}</label>
                  <Input
                    type="text"
                    placeholder={c.yourName}
                    className="bg-[#0a0a0f]/50 border-[#00d4ff]/20 text-[#e0e7ff] placeholder:text-[#94a3b8] focus:border-[#00d4ff]"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-[#94a3b8]">{c.email}</label>
                <Input
                  type="email"
                  placeholder={c.yourEmail}
                  className="bg-[#0a0a0f]/50 border-[#00d4ff]/20 text-[#e0e7ff] placeholder:text-[#94a3b8] focus:border-[#00d4ff]"
                />
              </div>

              <div>
                <label className="block mb-2 text-[#94a3b8]">{c.phone}</label>
                <Input
                  type="tel"
                  placeholder="+976 xxxx xxxx"
                  className="bg-[#0a0a0f]/50 border-[#00d4ff]/20 text-[#e0e7ff] placeholder:text-[#94a3b8] focus:border-[#00d4ff]"
                />
              </div>

              <div>
                <label className="block mb-2 text-[#94a3b8]">{c.company}</label>
                <Input
                  type="text"
                  placeholder={c.companyPlaceholder}
                  className="bg-[#0a0a0f]/50 border-[#00d4ff]/20 text-[#e0e7ff] placeholder:text-[#94a3b8] focus:border-[#00d4ff]"
                />
              </div>

              <div>
                <label className="block mb-2 text-[#94a3b8]">{c.message}</label>
                <Textarea
                  placeholder={c.yourMessage}
                  rows={5}
                  className="bg-[#0a0a0f]/50 border-[#00d4ff]/20 text-[#e0e7ff] placeholder:text-[#94a3b8] focus:border-[#00d4ff] resize-none"
                />
              </div>

              <Button className="w-full bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0a0f] glow-effect">
                {c.send}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-8 text-center"
        >
          <h3 className="mb-4 text-[#00d4ff]">{c.officeHours}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-[#94a3b8] mb-2">{c.mondayFriday}</div>
              <div className="text-[#00d4ff]">{c.businessHours}</div>
            </div>
            <div>
              <div className="text-[#94a3b8] mb-2">{c.saturdaySunday}</div>
              <div className="text-[#00d4ff]">{c.closed}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}