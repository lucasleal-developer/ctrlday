import { motion } from 'framer-motion';

const Schedule = () => {
  const scheduleItems = [
    {
      time: "08h00 às 09h45",
      title: "Competições de Piskel e Magica Voxel",
      description: "Mostre seu talento criando pixel art e modelos 3D voxel!",
      icon: "🎨",
      color: "bg-gradient-to-br from-purple-100 to-purple-200 border-purple-400 text-purple-800",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      time: "08h30 às 09h15",
      title: "Café com o Pedagógico",
      description: "Momento especial para pais e responsáveis conhecerem mais sobre nossa proposta educacional.",
      icon: "☕",
      color: "bg-gradient-to-br from-blue-100 to-blue-200 border-blue-400 text-blue-800",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      time: "09h50 às 10h30",
      title: "Intervalo",
      description: "Momento para descanso e preparação para as próximas atividades.",
      icon: "⏱️",
      color: "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-400 text-gray-800",
      iconBg: "bg-gradient-to-br from-gray-500 to-gray-600"
    },
    {
      time: "10h30 às 11h30",
      title: "Concurso de Cosplay",
      description: "Vista sua fantasia e mostre sua criatividade! Votação ao vivo pelos participantes.",
      icon: "🎭",
      color: "bg-gradient-to-br from-green-100 to-green-200 border-green-400 text-green-800",
      iconBg: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      time: "11h30 às 12h30",
      title: "Premiação e Encerramento",
      description: "Celebração dos vencedores e momentos especiais de confraternização.",
      icon: "🏆",
      color: "bg-gradient-to-br from-orange-100 to-orange-200 border-orange-400 text-orange-800",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="cronograma" className="py-16 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-bounce"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <span className="mr-2">📅</span>
            Programação Oficial
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Cronograma do CTRL+DAY
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Confira a programação completa do nosso evento especial e não perca nenhuma atividade incrível!
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Linha do tempo vertical com gradiente da Ctrl+Play */}
            <div className="absolute left-52 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 hidden md:block shadow-lg"></div>

            {/* Itens do cronograma */}
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row mb-12 relative"
              >
                {/* Horário */}
                <div className="md:w-48 flex-shrink-0 mb-4 md:mb-0 flex justify-end">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg inline-flex items-center transform transition-all duration-300"
                  >
                    <span className="mr-2 text-lg">⏰</span>
                    <span className="text-sm md:text-base">{item.time}</span>
                  </motion.div>
                </div>

                {/* Ponto na linha do tempo */}
                <div className={`hidden md:block absolute left-52 top-4 w-8 h-8 rounded-full ${item.iconBg} transform -translate-x-4 z-10 shadow-lg flex items-center justify-center border-4 border-white`}>
                  <span className="text-white text-sm">{item.icon}</span>
                </div>

                {/* Card do evento */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-grow ml-0 md:ml-12 p-6 rounded-2xl border-l-4 shadow-xl ${item.color} bg-white relative overflow-hidden`}
                >
                  {/* Gradiente de fundo sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-50"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mr-4 shadow-lg`}>
                        <span className="text-white text-xl">{item.icon}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
