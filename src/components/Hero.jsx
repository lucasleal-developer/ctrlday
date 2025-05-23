import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
            CTRL+DAY: Celebração da Tecnologia e Criatividade!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            O Ctrl+Day é o nosso evento especial de celebração da tecnologia, criatividade e conexão entre alunos,
            famílias e convidados da comunidade Ctrl+Play! Nesta edição 100% online, convidamos todos a participarem
            de uma jornada divertida e educativa.
          </p>
          <div className="bg-purple-100 p-4 rounded-xl mb-8 border-l-4 border-purple-500">
            <p className="text-purple-800 font-medium">
              <span className="font-bold">📅 Quando?</span> Sábado, dia 31/05 - Horário: 8h às 12h30
            </p>
            <p className="text-purple-800 font-medium">
              <span className="font-bold">🚩 Onde?</span> Na tela do seu computador, via Zoom!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              href="#inscricao"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Inscreva-se Agora
            </motion.a>
            <motion.a
              href="#cronograma"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 text-center"
            >
              Ver Cronograma
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
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-green-300 rounded-full opacity-70"></div>
            <div className="absolute top-1/2 right-0 w-12 h-12 bg-red-300 rounded-full opacity-70"></div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="bg-white p-4 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center"
            >
              <img
                src="/imagens/robo6.svg"
                alt="Robô da Ctrl+Play"
                className="rounded-2xl w-3/4 mx-auto"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-10 -left-5 bg-white p-3 rounded-xl shadow-lg"
          >
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center text-white text-xs">🎮</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white text-xs">🎨</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white text-xs">👾</div>
              </div>
              <div className="ml-2">
                <p className="text-xs font-medium text-gray-500">Evento</p>
                <p className="text-sm font-bold text-purple-600">100% Online e Gratuito</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
