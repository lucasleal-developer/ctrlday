import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const RegistrationForm = () => {
  // Inicializar o EmailJS
  useEffect(() => {
    // Chave pública correta
    emailjs.init("lH5HG9dqpSBR_9_ID");
    console.log("EmailJS inicializado");
  }, []);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    isKid: false,
    isTeen: false,
    isParent: false,
    events: []
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAgeChange = (value) => {
    if (validateForm()) {
      setFormData({
        ...formData,
        age: value,
        isKid: value === 'kids',
        isTeen: value === 'teens',
        isParent: value === 'parent',
        events: [] // Reset events when age changes
      });
      setStep(2);
    }
  };

  const handleEventChange = (event) => {
    const currentEvents = [...formData.events];
    const eventIndex = currentEvents.indexOf(event);

    if (eventIndex > -1) {
      currentEvents.splice(eventIndex, 1);
    } else {
      currentEvents.push(event);
    }

    setFormData({
      ...formData,
      events: currentEvents
    });
  };

  // Função para gerar o conteúdo do email
  const generateEmailContent = () => {
    let eventsList = '';
    let eventTime = '';

    if (formData.isKid || formData.isTeen) {
      if (formData.events.includes('piskel_cosplay')) {
        eventsList += '- Concurso de Piskel (Pixel Arte) - 08h às 9:45h\n';
        eventsList += '- Concurso de Cosplay - 10h30 às 11h30\n';
        eventTime = '08h às 11h30';
      } else if (formData.events.includes('voxel_cosplay')) {
        eventsList += '- Concurso de Magica Voxel (Voxel Arte) - 08h às 9:45h\n';
        eventsList += '- Concurso de Cosplay - 10h30 às 11h30\n';
        eventTime = '08h às 11h30';
      } else {
        if (formData.events.includes('piskel')) {
          eventsList += '- Concurso de Piskel (Pixel Arte) - 08h às 9:45h\n';
          eventTime = eventTime || '08h às 9:45h';
        }
        if (formData.events.includes('voxel')) {
          eventsList += '- Concurso de Magica Voxel (Voxel Arte) - 08h às 9:45h\n';
          eventTime = eventTime || '08h às 9:45h';
        }
        if (formData.events.includes('cosplay')) {
          eventsList += '- Concurso de Cosplay - 10h30 às 11h30\n';
          eventTime = eventTime ? '08h às 11h30' : '10h30 às 11h30';
        }
      }
    } else if (formData.isParent) {
      eventsList = '- Roda de conversa com equipe pedagógica - 08h30 às 09h45\n';
      eventTime = '08h30 às 09h45';
    }

    return {
      subject: 'Confirmação de Inscrição - CTRL+DAY',
      body: `
Olá ${formData.name},

Sua inscrição para o CTRL+DAY foi confirmada com sucesso!

Detalhes do evento:
📅 Data: Sábado, 31/05
🕒 Horário: ${eventTime}
🕒 Duração: 45 minutos
📍 Plataforma: Zoom
🔗 Link de acesso: https://zoom.us/j/7705946111

${formData.isParent ? 'Você está inscrito para:' : 'Você está inscrito nos seguintes concursos:'}
${eventsList}

Lembre-se de entrar na sala alguns minutos antes do início para testar seu áudio e vídeo.

Estamos ansiosos para vê-lo no evento!

Atenciosamente,
Equipe Ctrl+Play
      `
    };
  };

  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setEmailError('');

    // Gerar o conteúdo do email
    const emailContent = generateEmailContent();

    // Verificar se o email está preenchido
    if (!formData.email || formData.email.trim() === '') {
      setEmailError('O endereço de email é obrigatório para enviar a confirmação.');
      setSending(false);
      return;
    }

    // Preparar os dados para o EmailJS
    const templateParams = {
      to_name: formData.name,
      to_email: formData.email,
      email: formData.email, // Adicionando email como parâmetro alternativo
      recipient: formData.email, // Adicionando recipient como parâmetro alternativo
      subject: emailContent.subject,
      message: emailContent.body,
      event_date: '31/05',
      event_time: emailContent.body.split('🕒 Horário: ')[1].split('\n')[0],
      event_duration: '45 minutos',
      event_platform: 'Zoom',
      event_link: 'https://zoom.us/j/7705946111'
    };

    // Enviar o email usando EmailJS
    console.log('Enviando email com os parâmetros:', templateParams);
    console.log('Service ID:', 'service_hacz2wh');
    console.log('Template ID:', 'template_5rq0zt9');

    // Usando o método mais recente com a chave pública explícita
    emailjs.send(
      'service_hacz2wh',
      'template_5rq02t9',
      templateParams,
      'lH5HG9dqpSBR_9_ID' // Chave pública explícita - verifique se está correta
    )
    .then((response) => {
      console.log('Email enviado com sucesso!', response);

      // Armazenar o conteúdo do email para exibir na tela de confirmação
      setFormData({
        ...formData,
        emailContent: emailContent
      });

      setSending(false);
      setStep(3); // Avançar para a etapa de confirmação
    })
    .catch((err) => {
      console.error('Erro ao enviar email:', err);
      // Mensagem de erro mais detalhada
      setEmailError(`Ocorreu um erro ao enviar o email: ${err.text || err.message || 'Erro desconhecido'}. Por favor, tente novamente.`);
      setSending(false);
    });
  };

  return (
    <section id="inscricao" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 bg-gradient-to-br from-purple-600 to-blue-500 p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-6">Inscrição para o CTRL+DAY</h2>
              <p className="mb-8">
                Participe do nosso evento especial de celebração da tecnologia, criatividade e conexão!
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Data</h3>
                    <p>Sábado, 31/05 - 8h às 12h30</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Plataforma</h3>
                    <p>Zoom (link enviado após inscrição)</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Importante</h3>
                    <p>Evento 100% online e gratuito!</p>
                  </div>
                </div>
              </div>

              {step === 2 && formData.isParent && (
                <div className="mt-8 p-4 bg-white/10 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">☕ Café com o Pedagógico</h3>
                  <p className="text-sm">
                    Um encontro especial para famílias onde discutiremos o que seu filho aprende na Ctrl+Play,
                    como a tecnologia impacta o futuro educacional e compartilharemos histórias inspiradoras!
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Link de acesso:</strong> https://zoom.us/j/7705946111
                  </p>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:w-1/2 p-12"
            >
              {step === 1 && (
                <>
                  <h2 className="text-3xl font-bold text-purple-700 mb-6">Inscreva-se Agora</h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({...formData, name: e.target.value});
                          if (errors.name) setErrors({...errors, name: ''});
                        }}
                        className={`w-full px-4 py-3 border-2 ${errors.name ? 'border-red-400' : 'border-purple-200'} rounded-lg focus:outline-none focus:border-purple-500`}
                        placeholder="Seu nome completo"
                        required
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({...formData, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: ''});
                        }}
                        className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-red-400' : 'border-purple-200'} rounded-lg focus:outline-none focus:border-purple-500`}
                        placeholder="seu@email.com"
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Qual sua idade?</label>
                      <div className="space-y-3">
                        <button
                          type="button"
                          onClick={() => handleAgeChange('kids')}
                          className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg text-left hover:bg-purple-50 focus:outline-none focus:border-purple-500 transition-colors"
                        >
                          9 anos ou menos - Kids
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAgeChange('teens')}
                          className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg text-left hover:bg-purple-50 focus:outline-none focus:border-purple-500 transition-colors"
                        >
                          10 anos ou mais - Teens ou Young
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAgeChange('parent')}
                          className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg text-left hover:bg-purple-50 focus:outline-none focus:border-purple-500 transition-colors"
                        >
                          Sou um responsável - Quero conversar com a equipe pedagógica
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}

              {step === 2 && !formData.isParent && (
                <>
                  <h2 className="text-3xl font-bold text-purple-700 mb-6">Escolha as Atividades</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Qual evento você gostaria de participar?</label>
                      <div className="space-y-3">
                        {formData.isKid && (
                          <>
                            <label className="flex items-start p-3 border-2 border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                              <input
                                type="checkbox"
                                className="mt-1 mr-3"
                                checked={formData.events.includes('piskel_cosplay')}
                                onChange={() => handleEventChange('piskel_cosplay')}
                              />
                              <div>
                                <span className="font-medium">Concurso de Piskel (Pixel Arte) - 08h às 9:45h</span>
                                <p className="text-sm text-gray-500">e Concurso de Cosplay - 10h30 às 11h30</p>
                              </div>
                            </label>

                            <label className="flex items-start p-3 border-2 border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                              <input
                                type="checkbox"
                                className="mt-1 mr-3"
                                checked={formData.events.includes('piskel')}
                                onChange={() => handleEventChange('piskel')}
                              />
                              <div>
                                <span className="font-medium">Concurso de Piskel (Pixel Arte)</span>
                                <p className="text-sm text-gray-500">08h às 9:45h</p>
                              </div>
                            </label>

                            <label className="flex items-start p-3 border-2 border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                              <input
                                type="checkbox"
                                className="mt-1 mr-3"
                                checked={formData.events.includes('cosplay')}
                                onChange={() => handleEventChange('cosplay')}
                              />
                              <div>
                                <span className="font-medium">Concurso de Cosplay</span>
                                <p className="text-sm text-gray-500">10h30 às 11h30</p>
                              </div>
                            </label>
                          </>
                        )}

                        {formData.isTeen && (
                          <>
                            <label className="flex items-start p-3 border-2 border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                              <input
                                type="checkbox"
                                className="mt-1 mr-3"
                                checked={formData.events.includes('piskel_cosplay')}
                                onChange={() => handleEventChange('piskel_cosplay')}
                              />
                              <div>
                                <span className="font-medium">Concurso de Piskel (Pixel Arte) - 08h às 9:45h</span>
                                <p className="text-sm text-gray-500">e Concurso de Cosplay - 10h30 às 11h30</p>
                              </div>
                            </label>

                            <label className="flex items-start p-3 border-2 border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                              <input
                                type="checkbox"
                                className="mt-1 mr-3"
                                checked={formData.events.includes('voxel_cosplay')}
                                onChange={() => handleEventChange('voxel_cosplay')}
                              />
                              <div>
                                <span className="font-medium">Concurso de Magica Voxel (Voxel Arte) - 08h às 9:45h</span>
                                <p className="text-sm text-gray-500">e Concurso de Cosplay - 10h30 às 11h30</p>
                              </div>
                            </label>

                            <label className="flex items-start p-3 border-2 border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                              <input
                                type="checkbox"
                                className="mt-1 mr-3"
                                checked={formData.events.includes('piskel')}
                                onChange={() => handleEventChange('piskel')}
                              />
                              <div>
                                <span className="font-medium">Concurso de Piskel (Pixel Arte)</span>
                                <p className="text-sm text-gray-500">08h às 9:45h</p>
                              </div>
                            </label>

                            <label className="flex items-start p-3 border-2 border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                              <input
                                type="checkbox"
                                className="mt-1 mr-3"
                                checked={formData.events.includes('voxel')}
                                onChange={() => handleEventChange('voxel')}
                              />
                              <div>
                                <span className="font-medium">Concurso de Magica Voxel (Voxel Arte)</span>
                                <p className="text-sm text-gray-500">08h às 9:45h</p>
                              </div>
                            </label>

                            <label className="flex items-start p-3 border-2 border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                              <input
                                type="checkbox"
                                className="mt-1 mr-3"
                                checked={formData.events.includes('cosplay')}
                                onChange={() => handleEventChange('cosplay')}
                              />
                              <div>
                                <span className="font-medium">Concurso de Cosplay</span>
                                <p className="text-sm text-gray-500">10h30 às 11h30</p>
                              </div>
                            </label>
                          </>
                        )}
                      </div>
                    </div>

                    {emailError && (
                      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
                        <p>{emailError}</p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        type="button"
                        onClick={() => setStep(1)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={sending}
                        className={`sm:w-1/3 bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        Voltar
                      </motion.button>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={sending}
                        className={`sm:w-2/3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${sending ? 'opacity-70 cursor-wait' : ''}`}
                      >
                        {sending ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          'Finalizar Inscrição'
                        )}
                      </motion.button>
                    </div>
                  </form>
                </>
              )}

              {step === 2 && formData.isParent && (
                <>
                  <h2 className="text-3xl font-bold text-purple-700 mb-6">Café com o Pedagógico</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <p className="text-gray-600 mb-4">
                        Enquanto os alunos participam das atividades práticas, convidamos você para um momento especial
                        com a equipe pedagógica da Ctrl+Play. Será uma excelente oportunidade para tirar dúvidas,
                        conhecer mais sobre nosso trabalho e fortalecer essa parceria tão importante entre escola e família.
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-4">
                        <p className="text-purple-700 font-medium">Temas da conversa:</p>
                        <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                          <li>O que seu filho aprende na Ctrl+Play?</li>
                          <li>Como a tecnologia impacta o futuro educacional?</li>
                          <li>Relatos e histórias inspiradoras de alunos!</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="parent-email" className="block text-gray-700 font-medium mb-2">Email para receber o link</label>
                      <input
                        type="email"
                        id="parent-email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    {emailError && (
                      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
                        <p>{emailError}</p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        type="button"
                        onClick={() => setStep(1)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={sending}
                        className={`sm:w-1/3 bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        Voltar
                      </motion.button>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={sending}
                        className={`sm:w-2/3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${sending ? 'opacity-70 cursor-wait' : ''}`}
                      >
                        {sending ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          'Confirmar Participação'
                        )}
                      </motion.button>
                    </div>
                  </form>
                </>
              )}

              {step === 3 && (
                <div className="py-8">
                  <div className="text-center mb-8">
                    <div className="text-green-500 text-6xl mb-4">✓</div>
                    <h2 className="text-3xl font-bold text-purple-700 mb-4">Inscrição Confirmada!</h2>
                    <p className="text-gray-600 mb-6">
                      Obrigado por se inscrever no CTRL+DAY! Enviamos um email com todas as informações
                      e o link para acessar o evento no dia 31/05.
                    </p>
                    <p className="text-gray-600 mb-8">
                      Não esqueça de marcar em sua agenda e preparar-se para um dia incrível de tecnologia e diversão!
                    </p>
                  </div>

                  {formData.emailContent && (
                    <div className="mt-8 border-t pt-8">
                      <h3 className="text-xl font-bold text-purple-700 mb-4">Prévia do Email Enviado:</h3>
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700">
                        <p className="font-bold mb-2">Assunto: {formData.emailContent.subject}</p>
                        <div className="whitespace-pre-line font-mono text-sm">
                          {formData.emailContent.body}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
