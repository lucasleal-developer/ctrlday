import { motion } from 'framer-motion';

const Features = () => {
  const activities = [
    {
      icon: "🎨",
      title: "Concurso de Piskel (Pixel Arte)",
      description: "Crie incríveis pixel arts usando a plataforma Piskel e mostre seu talento artístico digital. Ideal para todas as idades!",
      color: "bg-pink-100 text-pink-600",
      forKids: true,
      forTeens: true
    },
    {
      icon: "🧊",
      title: "Concurso de Magica Voxel",
      description: "Desenvolva modelos 3D usando cubos (voxels) na plataforma MagicaVoxel. Uma atividade desafiadora para os mais experientes!",
      color: "bg-blue-100 text-blue-600",
      forKids: false,
      forTeens: true
    },
    {
      icon: "🦸‍♀️",
      title: "Concurso de Cosplay",
      description: "Vista-se como seu personagem favorito de games, animes ou filmes e participe desta competição cheia de criatividade!",
      color: "bg-purple-100 text-purple-600",
      forKids: true,
      forTeens: true
    },
    {
      icon: "☕",
      title: "Café com o Pedagógico",
      description: "Momento especial para pais e responsáveis conhecerem mais sobre nossa proposta educacional e o impacto da tecnologia no futuro dos alunos.",
      color: "bg-yellow-100 text-yellow-600",
      forParents: true
    },
    {
      icon: "🏆",
      title: "Premiação Digital",
      description: "Votações ao vivo e premiações digitais para os vencedores das competições. Todos podem participar!",
      color: "bg-green-100 text-green-600",
      forKids: true,
      forTeens: true
    },
    {
      icon: "🔄",
      title: "Interação em Tempo Real",
      description: "Participe de discussões, faça perguntas e interaja com outros participantes durante todo o evento via Zoom.",
      color: "bg-red-100 text-red-600",
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
    <section id="atividades" className="py-16 px-6 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-purple-700 mb-4"
          >
            Atividades do CTRL+DAY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Durante o evento, os alunos podem participar de competições temáticas nas plataformas Piskel e MagicaVoxel,
            além de um Concurso de Cosplay Online cheio de imaginação! Enquanto isso, os responsáveis são convidados a
            uma roda de conversa com a equipe pedagógica.
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`p-6 ${activity.color} rounded-t-2xl`}>
                <div className="text-5xl mb-2">{activity.icon}</div>
                <h3 className="text-xl font-bold">{activity.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activity.forKids && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      Kids (até 9 anos)
                    </span>
                  )}
                  {activity.forTeens && (
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                      Teens/Young (10+ anos)
                    </span>
                  )}
                  {activity.forParents && (
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                      Responsáveis
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
