import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="py-16 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          {/* Badge da Ctrl+Play */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <span className="mr-2">🤖</span>
            Ctrl+Play apresenta
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              CTRL+DAY
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-700 font-medium">
              Celebração da Tecnologia e Criatividade!
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            O maior evento da <strong className="text-purple-600">Ctrl+Play</strong>! Uma celebração especial de tecnologia,
            criatividade e conexão entre alunos, famílias e toda a comunidade.
            <span className="text-blue-600 font-medium">100% online e gratuito!</span>
          </p>
          {/* Card de informações do evento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-2xl mb-8 shadow-xl border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📅</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Quando</p>
                  <p className="text-gray-800 font-bold">Sábado, 31/05</p>
                  <p className="text-sm text-gray-600">8h às 12h30</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">💻</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Onde</p>
                  <p className="text-gray-800 font-bold">100% Online</p>
                  <p className="text-sm text-gray-600">Via Zoom</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              href="#inscricao"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden group"
            >
              <span className="relative z-10">🚀 Inscreva-se Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              href="#cronograma"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl shadow-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 text-center"
            >
              📋 Ver Cronograma
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 relative"
        >
          <div className="relative">
            {/* Elementos decorativos com cores da Ctrl+Play */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-1/2 right-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-30"></div>
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-40 animate-ping"></div>

            {/* Card principal com o robô */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="bg-white p-8 rounded-3xl shadow-2xl overflow-hidden relative"
            >
              {/* Gradiente de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 opacity-50"></div>

              <div className="relative z-10 flex items-center justify-center">
                <img
                  src="/imagens/robo6.svg"
                  alt="Robô da Ctrl+Play"
                  className="w-4/5 mx-auto filter drop-shadow-lg"
                />
              </div>

              {/* Elementos tecnológicos flutuantes */}
              <div className="absolute top-4 right-4 text-2xl animate-spin" style={{ animationDuration: '8s' }}>⚙️</div>
              <div className="absolute bottom-4 left-4 text-xl animate-bounce">💻</div>
              <div className="absolute top-1/2 left-2 text-lg animate-pulse">🔧</div>
            </motion.div>
          </div>

          {/* Card de estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-10 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm shadow-lg">🎮</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm shadow-lg">🎨</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-sm shadow-lg">🤖</div>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Ctrl+Play</p>
                <p className="text-sm font-bold text-gray-800">Evento Especial</p>
                <p className="text-xs text-green-600 font-medium">✨ Gratuito</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
