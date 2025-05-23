import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 py-4 px-6 rounded-b-3xl shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="text-white font-bold text-3xl flex items-center">
            <span className="text-yellow-300 mr-2">🚀</span>
            <span className="bg-white text-purple-600 px-3 py-1 rounded-xl mr-1">CTRL+</span>
            <span className="text-white">DAY</span>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:flex space-x-6"
        >
          <a href="#inicio" className="text-white hover:text-yellow-300 font-medium transition-colors duration-200">Início</a>
          <a href="#cronograma" className="text-white hover:text-yellow-300 font-medium transition-colors duration-200">Cronograma</a>
          <a href="#atividades" className="text-white hover:text-yellow-300 font-medium transition-colors duration-200">Atividades</a>
          <a href="#perguntas" className="text-white hover:text-yellow-300 font-medium transition-colors duration-200">Perguntas</a>
          <a href="#inscricao" className="text-white hover:text-yellow-300 font-medium transition-colors duration-200">Inscrição</a>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
