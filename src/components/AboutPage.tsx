import { motion } from 'motion/react';
import { Target, Eye, Shield, Award, Leaf, Users } from 'lucide-react';

interface AboutPageProps {
  t: any;
}

export function AboutPage({ t }: AboutPageProps) {
  const missionVision = [
    {
      icon: Target,
      title: t.about.ourMission,
      description: t.about.missionDescription,
    },
    {
      icon: Eye,
      title: t.about.ourVision,
      description: t.about.visionDescription,
    },
  ];

  const coreValues = [
    {
      icon: Shield,
      title: t.about.value1Title,
      description: t.about.value1Description,
    },
    {
      icon: Award,
      title: t.about.value2Title,
      description: t.about.value2Description,
    },
    {
      icon: Target,
      title: t.about.value3Title,
      description: t.about.value3Description,
    },
    {
      icon: Users,
      title: t.about.value4Title,
      description: t.about.value4Description,
    },
    {
      icon: Leaf,
      title: t.about.value5Title,
      description: t.about.value5Description,
    },
    {
      icon: Users,
      title: t.about.value6Title,
      description: t.about.value6Description,
    },
  ];

  const team = [
    { name: t.about.team1Name, role: t.about.team1Role, specialty: t.about.team1Specialty, image: 'https://images.unsplash.com/photo-1543879739-ab87be3df369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMEFzaWFuJTIwbWFufGVufDF8fHx8MTc3MDI2MjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: t.about.team2Name, role: t.about.team2Role, specialty: t.about.team2Specialty, image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBBc2lhbiUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcwMjYyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: t.about.team3Name, role: t.about.team3Role, specialty: t.about.team3Specialty, image: 'https://images.unsplash.com/photo-1565350293547-7f5534d7d466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHByb2Zlc3Npb25hbCUyMEFzaWFufGVufDF8fHx8MTc3MDI2MjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: t.about.team4Name, role: t.about.team4Role, specialty: t.about.team4Specialty, image: 'https://images.unsplash.com/photo-1766297247913-54717c00e79c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBsYWJvcmF0b3J5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDI2MjE0NHww&ixlib=rb-4.1.0&q=80&w=1080' },
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
            <span className="text-[#00d4ff]">{t.about.title}</span> {t.about.khimiConsulting}
          </h1>
          <p className="max-w-2xl mx-auto text-[#94a3b8]">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionVision.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center mb-6 glow-effect">
                  <value.icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="mb-4 text-[#00d4ff]">{value.title}</h3>
                <p className="text-[#94a3b8]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center mb-6 glow-effect">
                  <value.icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="mb-4 text-[#00d4ff]">{value.title}</h3>
                <p className="text-[#94a3b8]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-[#00d4ff]">{t.about.leadershipTeam}</h2>
            <p className="text-[#94a3b8]">
              {t.about.teamDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-[#00d4ff] to-[#a855f7] p-0.5 overflow-hidden"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-[#00d4ff] mb-2">{member.role}</p>
                <p className="text-[#94a3b8]">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}