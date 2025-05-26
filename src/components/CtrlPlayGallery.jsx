import { motion } from 'framer-motion';

const CtrlPlayGallery = () => {
  const galleryItems = [
    {
      type: 'image',
      title: 'Aulas de Programação',
      description: 'Crianças aprendendo programação de forma divertida',
      content: '👨‍💻👩‍💻',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      icon: '🎓'
    },
    {
      type: 'image',
      title: 'Projetos Criativos',
      description: 'Desenvolvendo jogos e aplicações incríveis',
      content: '🎮🎨',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      icon: '🚀'
    },
    {
      type: 'image',
      title: 'Robótica Educacional',
      description: 'Construindo e programando robôs',
      content: '🤖⚙️',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      icon: '🔧'
    },
    {
      type: 'video',
      title: 'Depoimentos dos Alunos',
      description: 'Veja o que nossos alunos falam sobre a Ctrl+Play',
      content: '🎬📹',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      icon: '🎥'
    },
    {
      type: 'image',
      title: 'Eventos e Competições',
      description: 'Participação em hackathons e olimpíadas',
      content: '🏆🥇',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      icon: '🎯'
    },
    {
      type: 'image',
      title: 'Metodologia Inovadora',
      description: 'Aprendizado baseado em projetos e gamificação',
      content: '📚💡',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      icon: '💎'
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-bounce"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <span className="mr-2">📸</span>
            Galeria Ctrl+Play
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Momentos Especiais
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Relembre os momentos especiais da nossa jornada juntos na <strong className="text-purple-600">Ctrl+Play</strong>
            através de imagens e vídeos dos projetos incríveis que nossos alunos desenvolveram!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Imagem/Vídeo simulado */}
                <div className={`relative h-48 ${item.color} flex items-center justify-center overflow-hidden`}>
                  {/* Overlay com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>

                  {/* Conteúdo principal */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="text-6xl relative z-10"
                  >
                    {item.content}
                  </motion.div>

                  {/* Ícone do tipo */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">{item.icon}</span>
                  </div>

                  {/* Overlay de play para vídeos */}
                  {item.type === 'video' && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                        <div className="w-0 h-0 border-l-[12px] border-l-gray-800 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </motion.div>
                  )}

                  {/* Efeitos de partículas */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className="absolute top-2 left-4 text-white/60 text-sm"
                  >
                    ✨
                  </motion.div>
                </div>

                {/* Conteúdo do card */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Botão de ação */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-4 inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-300"
                  >
                    <span className="mr-2">
                      {item.type === 'video' ? 'Assistir' : 'Ver mais'}
                    </span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 max-w-2xl mx-auto text-white shadow-2xl">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-5xl mb-4"
            >
              🎉
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">
              Obrigado por fazer parte da família Ctrl+Play!
            </h3>
            <p className="mb-6 opacity-90">
              É incrível ver como nossos alunos evoluíram e os projetos fantásticos que criaram.
              O CTRL+DAY é nossa forma de celebrar essa jornada juntos!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-bold shadow-lg cursor-pointer"
            >
              <span className="mr-2">🎉</span>
              Vamos celebrar juntos!
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtrlPlayGallery;
