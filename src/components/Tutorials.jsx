import { motion } from 'framer-motion';

const Tutorials = () => {
  const tutorials = [
    {
      title: "Tutorial de Magica Voxel",
      videoId: "_0AFQzUspRc",
      description: "Aprenda a criar modelos 3D incríveis com voxels para a competição!",
      icon: "🧊",
      color: "bg-blue-100 border-blue-400 text-blue-700"
    },
    {
      title: "Tutorial de Piskel",
      videoId: "2fqA1fko2dU",
      description: "Domine a arte de criar pixel art animada para impressionar no concurso!",
      icon: "🎨",
      color: "bg-purple-100 border-purple-400 text-purple-700"
    }
  ];

  return (
    <section id="tutoriais" className="py-16 px-6 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-10 animate-bounce"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <span className="mr-2">🎓</span>
            Aprenda com a Ctrl+Play
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tutoriais Essenciais
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Revisem os tutoriais para se prepararem para as competições do CTRL+DAY!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`p-6 border-l-4 ${tutorial.color}`}>
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{tutorial.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {tutorial.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                      title={tutorial.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center">
              <div className="text-2xl mr-3">💡</div>
              <div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">
                  Lembrete!
                </h4>
                <p className="text-blue-700">
                  Revisem estes tutoriais para relembrar as técnicas e se prepararem para mostrar todo seu talento no CTRL+DAY!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tutorials;
