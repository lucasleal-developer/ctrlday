import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "Como faço para participar do CTRL+DAY?",
      answer: "Para participar, basta preencher o formulário de inscrição nesta página. Você receberá um e-mail de confirmação com o link do Zoom para acessar o evento no dia 31/05."
    },
    {
      question: "O evento é gratuito?",
      answer: "Sim, o CTRL+DAY é totalmente gratuito para todos os participantes. É uma oportunidade de celebrar a tecnologia e a criatividade com a comunidade Ctrl+Play!"
    },
    {
      question: "Preciso ter conhecimento prévio para participar das competições?",
      answer: "Não é necessário conhecimento prévio. As plataformas Piskel e MagicaVoxel são intuitivas, e daremos instruções básicas no início de cada atividade. O importante é a criatividade e a vontade de participar!"
    },
    {
      question: "Quais são as faixas etárias para as atividades?",
      answer: "As atividades são divididas em: Kids (até 9 anos) e Teens/Young (10 anos ou mais). O Concurso de Cosplay é aberto para todas as idades, enquanto o Concurso de Magica Voxel é recomendado apenas para Teens/Young devido à sua complexidade."
    },
    {
      question: "Como funciona o Concurso de Cosplay online?",
      answer: "Os participantes devem se vestir como seus personagens favoritos e apresentar-se brevemente via Zoom. A votação será feita ao vivo pelos participantes do evento, e os vencedores receberão premiações digitais."
    },
    {
      question: "O que é o 'Café com o Pedagógico'?",
      answer: "É uma roda de conversa descontraída com a coordenação, gestão e professores da Ctrl+Play, pensada para aproximar as famílias da nossa proposta educacional. Discutiremos temas como o aprendizado na Ctrl+Play, o impacto da tecnologia no futuro educacional e compartilharemos histórias inspiradoras de alunos."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="perguntas" className="py-16 px-6 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-purple-700 mb-4"
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tire suas dúvidas sobre o CTRL+DAY e como participar
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 rounded-xl flex justify-between items-center transition-colors duration-300 ${
                  activeIndex === index
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white text-purple-700 hover:bg-purple-100'
                }`}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <span className="text-2xl">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white border-2 border-t-0 border-purple-200 rounded-b-xl">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
