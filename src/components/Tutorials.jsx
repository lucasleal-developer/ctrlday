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
    <section id="tutoriais" className="py-16 px-6 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-purple-700 mb-4"
          >
            Tutoriais Essenciais
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Prepare-se para as competições assistindo aos nossos tutoriais!
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
                  Dica!
                </h4>
                <p className="text-blue-700">
                  Estes tutoriais vão te ajudar a dominar as ferramentas e criar projetos incríveis para as competições!
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
