import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-gradient-to-r from-purple-500 via-blue-500 to-green-400">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          {/* Logo inspirado no braço robótico da Ctrl+Play */}
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-green-400 rounded-xl flex items-center justify-center shadow-lg transform rotate-12">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">🤖</span>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <div className="text-2xl font-bold flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Ctrl+Play</span>
              <span className="ml-2 text-orange-500 font-bold">CTRL+DAY</span>
            </div>
            <p className="text-xs text-gray-500 font-medium">Evento Especial de Tecnologia</p>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:flex space-x-8"
        >
          <motion.a
            href="#cronograma"
            whileHover={{ scale: 1.05, color: "#8B5CF6" }}
            className="text-gray-700 hover:text-purple-600 transition-all duration-200 font-medium relative group"
          >
            Cronograma
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-200 group-hover:w-full"></span>
          </motion.a>
          <motion.a
            href="#atividades"
            whileHover={{ scale: 1.05, color: "#3B82F6" }}
            className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium relative group"
          >
            Atividades
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </motion.a>
          <motion.a
            href="#tutoriais"
            whileHover={{ scale: 1.05, color: "#10B981" }}
            className="text-gray-700 hover:text-green-600 transition-all duration-200 font-medium relative group"
          >
            Tutoriais
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-200 group-hover:w-full"></span>
          </motion.a>
          <motion.a
            href="#inscricao"
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Inscrição
          </motion.a>
        </motion.nav>

        {/* Menu mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="md:hidden"
        >
          <button className="text-gray-700 hover:text-purple-600 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
