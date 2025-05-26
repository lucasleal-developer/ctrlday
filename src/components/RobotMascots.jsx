import { motion } from 'framer-motion';

const MethodologyNAVE = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Fundo com padrão de nave espacial */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute inset-0">
          <defs>
            <pattern id="space" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#3B82F6"/>
              <circle cx="35" cy="25" r="0.5" fill="#8B5CF6"/>
              <circle cx="25" cy="40" r="0.8" fill="#EC4899"/>
              <path d="M15 15 L20 10 L25 15 L20 25 Z" fill="#6366F1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#space)"/>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <span className="mr-2">🚀</span>
            Metodologia Exclusiva Ctrl+Play
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Metodologia NAVE
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Nossa metodologia exclusiva que une <strong>ensino, criatividade e inovação</strong> para desenvolver
            habilidades essenciais para o futuro dos nossos alunos!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* N - Navegar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Fundo gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Área de animação */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 relative bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center shadow-lg">
                  {/* Letra N */}
                  <motion.div
                    className="absolute text-5xl font-bold text-white"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    N
                  </motion.div>

                  {/* Elementos decorativos */}
                  <motion.div
                    className="absolute text-xl top-2 right-2"
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  >
                    🧭
                  </motion.div>

                  <motion.div
                    className="absolute text-xl bottom-2 left-2"
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    🌊
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-blue-700 mb-3">Navegar</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Explorar</strong> o mundo digital com curiosidade e descobrir novas possibilidades
                  através da tecnologia e programação.
                </p>
              </div>
            </div>
          </motion.div>

          {/* A - Aprender */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Fundo gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Área de animação */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center shadow-lg">
                  {/* Letra A */}
                  <motion.div
                    className="absolute text-5xl font-bold text-white"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    A
                  </motion.div>

                  {/* Elementos decorativos */}
                  <motion.div
                    className="absolute text-xl top-3 left-3"
                    animate={{
                      y: [0, -10, 0],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  >
                    📚
                  </motion.div>

                  <motion.div
                    className="absolute text-xl bottom-3 right-3"
                    animate={{
                      rotate: [0, 360],
                      scale: [0.9, 1.1, 0.9]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    🎓
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-green-700 mb-3">Aprender</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Absorver conhecimento</strong> de forma prática e divertida, construindo uma base
                  sólida em programação e tecnologia.
                </p>
              </div>
            </div>
          </motion.div>

          {/* V - Vivenciar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Fundo gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Área de animação */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 relative bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center shadow-lg">
                  {/* Letra V */}
                  <motion.div
                    className="absolute text-5xl font-bold text-white"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    V
                  </motion.div>

                  {/* Elementos decorativos */}
                  <motion.div
                    className="absolute text-xl top-2 right-2"
                    animate={{
                      scale: [0.8, 1.3, 0.8],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  >
                    🎮
                  </motion.div>

                  <motion.div
                    className="absolute text-xl bottom-2 left-2"
                    animate={{
                      y: [0, -8, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    🎯
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-purple-700 mb-3">Vivenciar</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Experimentar na prática</strong> criando jogos, aplicativos e robôs desde as
                  primeiras aulas, transformando teoria em realidade.
                </p>
              </div>
            </div>
          </motion.div>

          {/* E - Estimular */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Fundo gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Área de animação */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 relative bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center shadow-lg">
                  {/* Letra E */}
                  <motion.div
                    className="absolute text-5xl font-bold text-white"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, -3, 3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    E
                  </motion.div>

                  {/* Elementos decorativos */}
                  <motion.div
                    className="absolute text-xl top-2 right-2"
                    animate={{
                      scale: [0.8, 1.3, 0.8],
                      y: [0, -8, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.3
                    }}
                  >
                    ⚡
                  </motion.div>

                  <motion.div
                    className="absolute text-xl bottom-2 left-2"
                    animate={{
                      rotate: [0, 360],
                      scale: [0.9, 1.2, 0.9]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 0.8
                    }}
                  >
                    🔥
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-orange-700 mb-3">Estimular</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Despertar a paixão</strong> pela tecnologia e motivar o desenvolvimento contínuo
                  de habilidades essenciais para o futuro.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seção de impacto da metodologia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 text-4xl"
              >
                🚀
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 left-4 text-3xl"
              >
                ⭐
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, -360],
                  scale: [0.8, 1.1, 0.8]
                }}
                transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 left-8 text-2xl"
              >
                🌟
              </motion.div>
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-7xl mb-6"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Metodologia NAVE em Ação no CTRL+DAY
              </h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed max-w-2xl mx-auto">
                No CTRL+DAY, nossos alunos vão <strong>navegar</strong> por desafios, <strong>aprender</strong> com
                a prática, <strong>vivenciar</strong> experiências únicas e se sentir <strong>estimulados</strong>
                a continuar sua jornada tecnológica!
              </p>

              {/* Destaque dos pilares */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">🧭</div>
                  <div className="font-bold text-sm">NAVEGAR</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">📚</div>
                  <div className="font-bold text-sm">APRENDER</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">🎮</div>
                  <div className="font-bold text-sm">VIVENCIAR</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold text-sm">ESTIMULAR</div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-bold shadow-lg cursor-pointer text-lg"
              >
                <span className="mr-2">🚀</span>
                Embarque Nessa NAVE Conosco!
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologyNAVE;
