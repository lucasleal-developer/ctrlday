import { motion } from 'framer-motion';

const Schedule = () => {
  const scheduleItems = [
    {
      time: "08h00 às 09h45",
      title: "Competições de Piskel e Magica Voxel",
      description: "Mostre seu talento criando pixel art e modelos 3D voxel!",
      icon: "🎨",
      color: "bg-blue-100 border-blue-400 text-blue-700"
    },
    {
      time: "08h30 às 09h15",
      title: "Roda de conversa com equipe pedagógica",
      description: "Momento especial para pais e responsáveis conhecerem mais sobre nossa proposta educacional.",
      icon: "☕",
      color: "bg-purple-100 border-purple-400 text-purple-700"
    },
    {
      time: "09h50 às 10h30",
      title: "Intervalo",
      description: "Momento para descanso e preparação para as próximas atividades.",
      icon: "⏱️",
      color: "bg-gray-100 border-gray-400 text-gray-700"
    },
    {
      time: "10h30 às 11h30",
      title: "Concurso de Cosplay",
      description: "Vista-se como seu personagem favorito e participe desta competição cheia de criatividade!",
      icon: "🦸‍♂️",
      color: "bg-pink-100 border-pink-400 text-pink-700"
    },
    {
      time: "11h30 às 12h30",
      title: "Premiação e Encerramento",
      description: "Anúncio dos vencedores e celebração final do evento.",
      icon: "🏆",
      color: "bg-yellow-100 border-yellow-400 text-yellow-700"
    }
  ];

  return (
    <section id="cronograma" className="py-16 px-6 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-purple-700 mb-4"
          >
            Cronograma do Evento
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Confira a programação completa do CTRL+DAY e não perca nenhuma atividade!
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha do tempo vertical */}
            <div className="absolute left-52 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-purple-600 hidden md:block"></div>

            {/* Itens do cronograma */}
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row mb-8 relative"
              >
                <div className="md:w-48 flex-shrink-0 mb-2 md:mb-0 flex justify-end">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-2 px-4 rounded-lg shadow-md inline-flex items-center transform transition-transform hover:scale-105">
                    <span className="mr-2">⏰</span>
                    {item.time}
                  </div>
                </div>

                <div className="hidden md:block absolute left-52 top-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 transform -translate-x-2.5 z-10 shadow-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className={`flex-grow ml-0 md:ml-12 p-5 rounded-xl border-l-4 ${item.color}`}>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
