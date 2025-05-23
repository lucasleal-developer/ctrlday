import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      title: "Desenvolvimento Cognitivo",
      description: "Atividades que estimulam o raciocínio lógico, memória e resolução de problemas.",
      icon: "🧠"
    },
    {
      title: "Habilidades Sociais",
      description: "Interação com outras crianças, aprendendo a compartilhar e trabalhar em equipe.",
      icon: "👥"
    },
    {
      title: "Expressão Emocional",
      description: "Ambiente seguro para expressar sentimentos e desenvolver inteligência emocional.",
      icon: "❤️"
    },
    {
      title: "Coordenação Motora",
      description: "Atividades físicas e artísticas que desenvolvem a coordenação motora fina e ampla.",
      icon: "🤸‍♂️"
    }
  ];

  return (
    <section id="beneficios" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-purple-700 mb-4"
          >
            Benefícios para seu Filho
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Nosso programa foi desenvolvido por especialistas em educação infantil para garantir o desenvolvimento integral das crianças.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-purple-300 rounded-full opacity-70"></div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-blue-300 rounded-full opacity-70"></div>
              
              <img 
                src="https://img.freepik.com/free-vector/children-playing-kindergarten-illustration_1308-26710.jpg" 
                alt="Crianças brincando e aprendendo" 
                className="rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2 md:pl-12"
          >
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-start bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mr-4">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-700 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
