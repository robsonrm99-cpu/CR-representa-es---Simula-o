import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, Car, Tractor, Truck, TrendingUp, 
  CheckCircle2, ShieldCheck, Star, Bell, ArrowRight, Lock, Gift, Clock, User, Phone, Loader2, ArrowUp
} from 'lucide-react';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
};

const BG_IMAGE = "https://res.cloudinary.com/dsevqnhts/image/upload/v1776449474/Design_sem_nome_16__page-0001_owwchm.jpg";

const testimonials = [
  { name: "Carlos Silva", text: "Consegui planejar a troca da minha frota pagando parcelas justas e sem juros abusivos." },
  { name: "Mariana Costa", text: "O atendimento foi excepcional! Realizei o sonho da casa própria com um consórcio que cabe no meu bolso." },
  { name: "Roberto Almeida", text: "Comprei meu trator novo sem descapitalizar minha fazenda. Recomendo muito a CR Representações." },
  { name: "Fernanda Lima", text: "Processo transparente e rápido. Em poucos meses fui contemplada e peguei meu carro zero." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const Landing = ({ onNext }: { onNext: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 55);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center px-6 pt-12 pb-24"
    >
      <motion.div variants={itemVariants} className="bg-white/50 text-zinc-900 px-6 py-3 rounded-2xl flex flex-col items-center mb-12 border border-zinc-100 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-2 font-bold text-sm mb-2 tracking-wide text-center">
          <Gift size={18} className="shrink-0" /> OFERTA EXCLUSIVA LIBERADA PARA VOCÊ
        </div>
        <div className="flex items-center gap-1.5 bg-zinc-900 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
          <Clock size={16} /> {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-4xl font-extrabold text-slate-900 mb-5 leading-[1.15] tracking-tight [text-shadow:_0_2px_15px_rgba(255,255,255,1),_0_0_30px_rgba(255,255,255,1)]">
        Nº 1 EM CONTEMPLAÇÃO <br/>
        NO <span className="text-zinc-900">PERNAMBUCO</span>🥇
      </motion.h1>

      <motion.p 
        variants={itemVariants} 
        className="text-slate-800 font-medium mb-10 text-[18px] leading-[30.25px] w-[317.812px] h-[61.5px] mt-[9px] mx-0 px-0 [text-shadow:_0_1px_10px_rgba(255,255,255,1),_0_0_15px_rgba(255,255,255,1)]"
      >
        Crédito inteligente sem juros abusivos.<br/>
        Descubra seu poder de compra.
      </motion.p>

      <motion.div variants={itemVariants} className="w-full max-w-md mb-12">
        <motion.button 
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="w-full bg-zinc-900 text-white text-xl font-bold py-4 rounded-full shadow-xl shadow-zinc-900/20 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
        >
          Fazer Simulação <ArrowRight size={24} />
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
        <div className="flex items-center gap-1.5 bg-white/40 border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md">
          <CheckCircle2 size={18} className="text-zinc-900" /> SEM JUROS
        </div>
        <div className="flex items-center gap-1.5 bg-white/40 border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md">
          <ShieldCheck size={18} className="text-zinc-800" /> NEGATIVADOS
        </div>
        <div className="flex items-center gap-1.5 bg-white/40 border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md">
          <User size={18} className="text-zinc-900" /> ESPECIALISTAS
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4 w-full max-w-md">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Mais de 5.000 clientes satisfeitos</p>
        <div className="bg-white/40 p-6 rounded-3xl shadow-sm border border-slate-200 text-left relative backdrop-blur-md h-[193px] flex flex-col justify-center">
          <div className="flex text-amber-400 mb-3">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>
          <div className="relative flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <p className="text-slate-700 italic text-[15px] leading-relaxed mb-3">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-slate-900 font-bold text-sm">
                  - {testimonials[currentTestimonial].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <motion.button
        variants={itemVariants}
        onClick={() => {
          document.getElementById('top-of-scroll')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-16 flex items-center gap-2 text-slate-700 font-bold hover:text-zinc-900 transition-colors bg-white/60 px-6 py-3 rounded-full backdrop-blur-md border border-slate-200 shadow-sm"
      >
        <ArrowUp size={20} /> Voltar ao topo
      </motion.button>

      <motion.div variants={itemVariants} className="mt-16 text-center opacity-80">
        <p className="text-slate-800 text-sm font-bold">CR Representações</p>
        <p className="text-slate-700 text-xs mt-1">Há mais de 10 anos realizando sonhos.</p>
        <p className="text-slate-700 text-xs mt-1">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </motion.div>
    </motion.div>
  );
};

const targets = [
  { id: 'imovel', title: 'Imóvel', desc: 'Casa, Apto ou Terreno', icon: Home },
  { id: 'veiculo', title: 'Veículo', desc: 'Carros e Motos', icon: Car },
  { id: 'agricola', title: 'Agrícola', desc: 'Máquinas e Insumos', icon: Tractor },
  { id: 'pesados', title: 'Pesados', desc: 'Caminhões e Frotas', icon: Truck },
  { id: 'investimento', title: 'Investimento', desc: 'Aumento de Patrimônio', icon: TrendingUp },
];

const Step1 = ({ onSelect }: { onSelect: (val: string) => void }) => (
  <div className="px-6 py-8">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Qual é o seu alvo?</h2>
    <p className="text-slate-600 mb-8 text-lg">Escolha o segmento desejado.</p>
    
    <div className="flex flex-col gap-3.5">
      {targets.map(t => (
        <motion.button 
          whileTap={{ scale: 0.95 }}
          key={t.id}
          onClick={() => onSelect(t.title)}
          className="flex items-center gap-5 p-4 bg-white/40 border border-slate-200 rounded-3xl shadow-sm hover:border-zinc-900 hover:bg-white/60 transition-colors text-left group backdrop-blur-md w-full"
        >
          <div className="bg-slate-100 p-3.5 rounded-2xl text-slate-600 group-hover:text-zinc-900 group-hover:bg-zinc-100 transition-colors">
            <t.icon size={26} strokeWidth={2} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{t.title}</h3>
            <p className="text-slate-500 text-sm mt-0.5">{t.desc}</p>
          </div>
        </motion.button>
      ))}
    </div>
  </div>
);

const Step2 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Valor do Crédito</h2>
    <p className="text-slate-600 mb-10 text-lg">Quanto você precisa para realizar este objetivo?</p>
    
    <div className="bg-white/40 p-8 rounded-[2rem] shadow-sm border border-slate-200 mb-10 backdrop-blur-md">
      <div className="text-center mb-10">
        <span className="text-[2.75rem] font-extrabold text-zinc-900 tracking-tight">{formatCurrency(value)}</span>
      </div>
      
      <input 
        type="range" 
        min={20000} 
        max={500000} 
        step={5000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-6"
      />
      <div className="flex justify-between text-sm font-semibold text-slate-500">
        <span>R$ 20 mil</span>
        <span>R$ 500 mil</span>
      </div>
    </div>

    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      className="w-full bg-zinc-900 text-white text-xl font-bold py-4.5 rounded-full shadow-lg hover:bg-zinc-800 transition-colors mt-auto"
    >
      Avançar
    </motion.button>
  </div>
);

const Step3 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Valor de Entrada</h2>
    <p className="text-slate-600 mb-10 text-lg">Qual valor você tem disponível para investir agora?</p>
    
    <div className="bg-white/40 p-8 rounded-[2rem] shadow-sm border border-slate-200 mb-10 backdrop-blur-md">
      <div className="text-center mb-10">
        <span className="text-[2.75rem] font-extrabold text-zinc-900 tracking-tight">{formatCurrency(value)}</span>
      </div>
      
      <input 
        type="range" 
        min={5000} 
        max={500000} 
        step={1000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-6"
      />
      <div className="flex justify-between text-sm font-semibold text-slate-500">
        <span>R$ 5 mil</span>
        <span>R$ 500 mil</span>
      </div>
    </div>

    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      className="w-full bg-zinc-900 text-white text-xl font-bold py-4.5 rounded-full shadow-lg hover:bg-zinc-800 transition-colors mt-auto"
    >
      Avançar
    </motion.button>
  </div>
);

const Step4 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Investimento Mensal</h2>
    <p className="text-slate-600 mb-10 text-lg">Qual parcela cabe confortavelmente no seu bolso?</p>
    
    <div className="bg-white/40 p-8 rounded-[2rem] shadow-sm border border-slate-200 mb-10 backdrop-blur-md">
      <div className="text-center mb-10">
        <span className="text-[2.75rem] font-extrabold text-zinc-900 tracking-tight">{formatCurrency(value)}</span>
      </div>
      
      <input 
        type="range" 
        min={500} 
        max={20000} 
        step={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-6"
      />
      <div className="flex justify-between text-sm font-semibold text-slate-500">
        <span>R$ 500</span>
        <span>R$ 20.000</span>
      </div>
    </div>

    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      className="w-full bg-zinc-900 text-white text-xl font-bold py-4.5 rounded-full shadow-lg hover:bg-zinc-800 transition-colors mt-auto"
    >
      Avançar
    </motion.button>
  </div>
);

const Step5 = ({ formData, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Último passo</h2>
    <p className="text-slate-600 mb-10 text-lg">Para onde enviamos seu plano estratégico?</p>
    
    <div className="flex flex-col gap-5 mb-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
          <User size={22} />
        </div>
        <input 
          type="text" 
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-white/40 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-lg shadow-sm placeholder:text-slate-400 font-medium text-slate-900 backdrop-blur-md"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
          <User size={22} />
        </div>
        <input 
          type="text" 
          placeholder="Indicado por (Opcional)"
          value={formData.referredBy}
          onChange={(e) => onChange('referredBy', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-white/40 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-lg shadow-sm placeholder:text-slate-400 font-medium text-slate-900 backdrop-blur-md"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
          <Phone size={22} />
        </div>
        <input 
          type="tel" 
          placeholder="Seu WhatsApp"
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-white/40 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-lg shadow-sm placeholder:text-slate-400 font-medium text-slate-900 backdrop-blur-md"
        />
      </div>
    </div>

    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      disabled={!formData.name || !formData.phone}
      className="w-full bg-zinc-900 text-white text-xl font-bold py-4.5 rounded-full shadow-sm hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-auto"
    >
      Receber Plano Exclusivo <ArrowRight size={22} />
    </motion.button>
    
    <div className="flex items-center justify-center gap-2 mt-8 text-slate-500 text-sm font-semibold tracking-wide">
      <Lock size={16} /> DADOS SEGUROS
    </div>
  </div>
);

const LoadingStep = ({ onNext }: { onNext: () => void }) => {
  const [loadingText, setLoadingText] = useState('Analisando seu perfil...');

  useEffect(() => {
    const texts = [
      'Analisando seu perfil...',
      'Buscando as melhores taxas...',
      'Calculando parcelas...',
      'Gerando plano exclusivo...'
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setLoadingText(texts[i]);
    }, 1200);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onNext]);

  return (
    <div className="px-6 py-8 flex flex-col items-center justify-center h-full min-h-[70vh] text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="text-zinc-900 mb-6"
      >
        <Loader2 size={64} />
      </motion.div>
      <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Aguarde...</h2>
      <p className="text-slate-600 text-lg">{loadingText}</p>
    </div>
  );
};

const Step6 = ({ formData }: any) => {
  const handleWhatsApp = () => {
    const text = `Olá! Fiz uma simulação no site da CR Representações e gostaria de falar com um especialista.\n\n*Resumo da Simulação:*\nAlvo: ${formData.target}\nCrédito: ${formatCurrency(formData.credit)}\nEntrada: ${formatCurrency(formData.entry)}\nParcela: ${formatCurrency(formData.installment)}\nNome: ${formData.name}\nWhatsApp: ${formData.phone}${formData.referredBy ? `\nIndicado por: ${formData.referredBy}` : ''}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5587999221384?text=${encodedText}`, '_blank');
  };

  return (
    <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Plano Gerado!</h2>
      <p className="text-slate-600 mb-10 text-lg">Sua estratégia está pronta.</p>
      
      <div className="bg-white/40 p-7 rounded-[2rem] shadow-sm border border-slate-200 mb-10 backdrop-blur-md">
        <div className="flex justify-between items-center py-4 border-b border-slate-200">
          <span className="text-slate-500 font-bold text-sm tracking-widest uppercase">Alvo</span>
          <span className="text-slate-900 font-bold text-lg">{formData.target}</span>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-slate-200">
          <span className="text-slate-500 font-bold text-sm tracking-widest uppercase">Crédito</span>
          <span className="text-zinc-900 font-extrabold text-xl">{formatCurrency(formData.credit)}</span>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-slate-200">
          <span className="text-slate-500 font-bold text-sm tracking-widest uppercase">Entrada</span>
          <span className="text-slate-900 font-bold text-lg">{formatCurrency(formData.entry)}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-slate-500 font-bold text-sm tracking-widest uppercase">Parcela</span>
          <span className="text-slate-900 font-bold text-lg">{formatCurrency(formData.installment)}</span>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-zinc-950 font-extrabold text-sm tracking-widest uppercase mb-4 text-center"
        >
          Sua conquista está te esperando!
        </motion.p>
        
        <motion.button 
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 10px 15px -3px rgba(37, 211, 102, 0.3)",
              "0 20px 25px -5px rgba(37, 211, 102, 0.5)",
              "0 10px 15px -3px rgba(37, 211, 102, 0.3)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="w-full bg-[#25D366] text-white text-xl font-bold py-4.5 rounded-full hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-3"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Falar com Especialista
        </motion.button>
      </div>
    </div>
  );
};

const notifications = [
  { name: 'Letícia M.', action: 'iniciou plano Agrícola', time: 'há 1 min' },
  { name: 'Rafael G.', action: 'iniciou plano Agrícola', time: 'há 2 min' },
  { name: 'João B.', action: 'reservou uma cota', time: 'agora mesmo' },
  { name: 'Marcos T.', action: 'reservou uma cota', time: 'há 1 min' },
  { name: 'Carlos E.', action: 'simulou Pesados', time: 'há 1 min' },
  { name: 'Ana P.', action: 'iniciou plano Imóvel', time: 'agora mesmo' },
];

const RecentActivity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const current = notifications[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-80 bg-white/60 p-3.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-4 z-50 backdrop-blur-md"
        >
          <div className="bg-zinc-100 text-zinc-900 p-2.5 rounded-full shrink-0">
            <Bell size={20} />
          </div>
          <div>
            <p className="text-[15px] text-slate-900 leading-tight">
              <span className="font-bold">{current.name}</span> {current.action}
            </p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">{current.time}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    target: '',
    credit: 100000,
    entry: 5000,
    installment: 700,
    name: '',
    referredBy: '',
    phone: ''
  });

  const nextStep = () => {
    document.getElementById('top-of-scroll')?.scrollIntoView({ behavior: 'smooth' });
    setStep(s => s + 1);
  };
  const prevStep = () => {
    document.getElementById('top-of-scroll')?.scrollIntoView({ behavior: 'smooth' });
    setStep(s => s - 1);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progress = step === 0 ? 0 : Math.round((step / 7) * 100);

  return (
    <div className="min-h-screen font-sans text-slate-900 relative overflow-hidden flex justify-center selection:bg-zinc-800/30">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 bg-white">
        <img src={BG_IMAGE} alt="" className="w-full h-full object-contain object-center p-4" />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="w-full max-w-md bg-transparent min-h-screen relative z-10 flex flex-col">
        
        {/* Header with Progress */}
        {step > 0 && (
          <div className="px-6 py-5 flex items-center justify-between sticky top-0 z-20">
            <button onClick={prevStep} className="text-xs font-bold text-slate-500 tracking-widest uppercase hover:text-slate-900 transition-colors">
              Voltar
            </button>
            <div className="flex-1 mx-5 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-zinc-900 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-bold text-slate-500 w-8 text-right">{progress}%</span>
          </div>
        )}

        {/* Content Area */}
        <div id="scroll-area" className="flex-1 overflow-y-auto pb-28">
          <div id="top-of-scroll" />
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-full"
            >
              {step === 0 && <Landing onNext={nextStep} />}
              {step === 1 && <Step1 onSelect={(val) => { updateFormData('target', val); nextStep(); }} />}
              {step === 2 && <Step2 value={formData.credit} onChange={(val: number) => updateFormData('credit', val)} onNext={nextStep} />}
              {step === 3 && <Step3 value={formData.entry} onChange={(val: number) => updateFormData('entry', val)} onNext={nextStep} />}
              {step === 4 && <Step4 value={formData.installment} onChange={(val: number) => updateFormData('installment', val)} onNext={nextStep} />}
              {step === 5 && <Step5 formData={formData} onChange={updateFormData} onNext={nextStep} />}
              {step === 6 && <LoadingStep onNext={nextStep} />}
              {step === 7 && <Step6 formData={formData} />}
            </motion.div>
          </AnimatePresence>
        </div>

        <RecentActivity />
      </div>
    </div>
  );
}
