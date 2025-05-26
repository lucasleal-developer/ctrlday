import { motion } from 'framer-motion';

const Features = () => {
  const activities = [
    {
      icon: "🎨",
      title: "Concurso de Piskel (Pixel Arte)",
      description: "Crie incríveis pixel arts usando a plataforma Piskel e mostre seu talento artístico digital. Ideal para todas as idades!",
      color: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-800",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
      forKids: true,
      forTeens: true
    },
    {
      icon: "🧊",
      title: "Concurso de Magica Voxel",
      description: "Desenvolva modelos 3D usando cubos (voxels) na plataforma MagicaVoxel. Uma atividade desafiadora para os mais experientes!",
      color: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      forKids: false,
      forTeens: true
    },
    {
      icon: "🎭",
      title: "Concurso de Cosplay",
      description: "Vista-se como seu personagem favorito de games, animes ou filmes e participe desta competição cheia de criatividade!",
      color: "bg-gradient-to-br from-green-100 to-green-200 text-green-800",
      iconBg: "bg-gradient-to-br from-green-500 to-green-600",
      forKids: true,
      forTeens: true
    },
    {
      icon: "☕",
      title: "Café com o Pedagógico",
      description: "Momento especial para pais e responsáveis conhecerem mais sobre nossa proposta educacional e o impacto da tecnologia no futuro dos alunos.",
      color: "bg-gradient-to-br from-orange-100 to-orange-200 text-orange-800",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      forParents: true
    },
    {
      icon: "🏆",
      title: "Premiação Digital",
      description: "Votações ao vivo e premiações digitais para os vencedores das competições. Todos podem participar!",
      color: "bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-800",
      iconBg: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      forKids: true,
      forTeens: true
    },
    {
      icon: "🤖",
      title: "Tecnologia e Diversão",
      description: "Participe de discussões, faça perguntas e interaja com outros participantes durante todo o evento via Zoom.",
      color: "bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-800",
      iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      forKids: true,
      forTeens: true,
      forParents: true
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="atividades" className="py-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-10 animate-bounce"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <span className="mr-2">🎮</span>
            Atividades Ctrl+Play
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Atividades do CTRL+DAY
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Durante o evento, os alunos podem participar de competições temáticas nas plataformas
            <strong className="text-purple-600"> Piskel</strong> e <strong className="text-blue-600">MagicaVoxel</strong>,
            além de um <strong className="text-green-600">Concurso de Cosplay</strong> cheio de imaginação!
            Enquanto isso, os responsáveis são convidados ao <strong className="text-orange-600">Café com o Pedagógico</strong>.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Gradiente de fundo sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-50"></div>

              <div className={`p-6 ${activity.color} relative z-10`}>
                <div className="flex items-center mb-3">
                  <div className={`w-16 h-16 rounded-2xl ${activity.iconBg} flex items-center justify-center mr-4 shadow-lg`}>
                    <span className="text-white text-2xl">{activity.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <p className="text-gray-700 mb-6 leading-relaxed">{activity.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activity.forKids && (
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                      👶 Kids (até 9 anos)
                    </span>
                  )}
                  {activity.forTeens && (
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 rounded-full text-sm font-medium shadow-sm">
                      🧑 Teens/Young (10+ anos)
                    </span>
                  )}
                  {activity.forParents && (
                    <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full text-sm font-medium shadow-sm">
                      👨‍👩‍👧‍👦 Responsáveis
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
