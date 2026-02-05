import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileCheck, Shield, Truck, FlaskConical, Cog, X } from 'lucide-react';
import { Button } from './ui/button';
import servicesHeroImage from 'figma:asset/7eb1da474307d18fa848a50bf7aa626fba22530f.png';

interface ServicesPageProps {
  t: any;
}

export function ServicesPage({ t }: ServicesPageProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Cog,
      title: t.services.miningTech || 'Mining Production Technology Management',
      short: t.services.miningTechDesc || 'Comprehensive solutions for optimizing processing plant operations',
      full: t.services.miningTechDesc || 'We offer comprehensive solutions for optimizing concentrator and processing plant operations, including stabilizing technological regimes, coordinating equipment operations, ensuring reliable operations, and optimizing key production parameters. We also organize training for key technological personnel and provide expert advice on storage, usage, and neutralization of chemicals used in plant operations.',
      features: [
        t.services.processEngineering,
        t.services.safetyIntegration,
        t.services.efficiencyOpt,
        t.services.staffTraining,
      ],
      image: 'https://images.unsplash.com/photo-1579240939813-446dc2b601dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBjaGVtaWNhbCUyMHByb2Nlc3NpbmclMjBpbmR1c3RyaWFsJTIwcGxhbnR8ZW58MXx8fHwxNzcwMjY0NTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Shield,
      title: t.services.chemicalConsulting || 'Chemical Consulting Services',
      short: t.services.chemicalConsultingDesc || 'Consulting services for hazardous chemical supply, storage, safe use, and waste management',
      full: t.services.chemicalConsultingDesc || 'We provide consulting services in the supply, storage, safe use, neutralization of hazardous chemicals used in production, and hazardous waste management. We also offer training programs for workers handling chemicals and hazardous materials.',
      features: [
        t.services.chemicalWarehouseDesign || 'Chemical warehouse design and organization',
        t.services.chemicalPermitSupport || 'Chemical permit and documentation support',
        t.services.chemicalRiskAssessment || 'Risk assessment for chemical projects',
        t.services.hazardousWasteConsulting || 'Hazardous waste management consulting',
        t.services.workerAssessment || 'Worker assessment using case and matrix methods',
        t.services.hazardousChemicalTraining || 'Training for workers handling hazardous chemicals',
      ],
      image: 'https://images.unsplash.com/photo-1748261347902-451fb437e8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHJlYWdlbnRzJTIwbWluaW5nJTIwbGFib3JhdG9yeSUyMGFuYWx5c2lzfGVufDF8fHx8MTc3MDI2NDU5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Truck,
      title: t.services.equipmentSupply || 'Mining Equipment & Chemical Supply',
      short: t.services.equipmentSupplyDesc || 'Sales and supply of all types of mining and heavy industry equipment, materials, and chemicals',
      full: t.services.equipmentSupplyDesc || 'We offer sales and supply services for all types of mining and heavy industry equipment, materials, chemicals, and raw materials.',
      features: [
        t.services.supplyChain,
        t.services.qualityVerification,
        t.services.logisticsCoordination,
        t.services.customsDocumentation,
      ],
      image: 'https://images.unsplash.com/photo-1752468348475-7101685ab2f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2hlbWlzdHJ5JTIwbWluaW5nJTIwb3BlcmF0aW9ucyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MDI2NDU5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
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
            <span className="text-[#00d4ff]">{t.services.title}</span> {t.services.titleHighlight}
          </h1>
          <p className="max-w-2xl mx-auto text-[#94a3b8]">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-64 glass"
        >
          <img
            src={servicesHeroImage}
            alt="Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              onClick={() => setSelectedService(index)}
              className="glass rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
            >
              {/* Animated molecules in background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#00d4ff]/20 transition-all glow-effect">
                  <service.icon className="w-7 h-7 text-[#00d4ff]" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-[#94a3b8] mb-4">{service.short}</p>
                <Button
                  variant="outline"
                  className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 w-full"
                >
                  {t.services.learnMore}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center glow-effect">
                      {(() => {
                        const ServiceIcon = services[selectedService].icon;
                        return <ServiceIcon className="w-8 h-8 text-[#00d4ff]" />;
                      })()}
                    </div>
                    <h2 className="text-[#00d4ff]">{services[selectedService].title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-[#94a3b8] mb-6">{services[selectedService].full}</p>
                
                <div>
                  <h3 className="mb-4 text-[#00d4ff]">{t.services.keyFeatures}</h3>
                  <ul className="space-y-3">
                    {services[selectedService].features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-[#94a3b8]"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}