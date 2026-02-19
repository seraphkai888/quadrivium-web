import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    path: 'vision' | 'knowledge' | 'systems' | 'wisdom';
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "When facing a complex problem, you instinctively:",
    options: [
      { text: "See the bigger picture and long-term implications", path: "vision" },
      { text: "Research and gather all available information", path: "knowledge" },
      { text: "Break it down into actionable steps", path: "systems" },
      { text: "Consider how it affects people involved", path: "wisdom" },
    ],
  },
  {
    id: 2,
    text: "In a team, others often look to you for:",
    options: [
      { text: "Direction and strategic decisions", path: "vision" },
      { text: "Expertise and deep knowledge", path: "knowledge" },
      { text: "Getting things done efficiently", path: "systems" },
      { text: "Mediation and understanding", path: "wisdom" },
    ],
  },
  {
    id: 3,
    text: "You feel most fulfilled when:",
    options: [
      { text: "A vision you articulated becomes reality", path: "vision" },
      { text: "You uncover a truth others missed", path: "knowledge" },
      { text: "You build something that works perfectly", path: "systems" },
      { text: "You help someone see things clearly", path: "wisdom" },
    ],
  },
  {
    id: 4,
    text: "Your greatest fear is:",
    options: [
      { text: "Being without purpose or direction", path: "vision" },
      { text: "Being wrong or misinformed", path: "knowledge" },
      { text: "Chaos and inefficiency", path: "systems" },
      { text: "Disconnection from others", path: "wisdom" },
    ],
  },
  {
    id: 5,
    text: "When learning something new, you prefer:",
    options: [
      { text: "Understanding why it matters first", path: "vision" },
      { text: "Going deep into the details", path: "knowledge" },
      { text: "Hands-on practice immediately", path: "systems" },
      { text: "Discussing it with others", path: "wisdom" },
    ],
  },
  {
    id: 6,
    text: "People would describe you as:",
    options: [
      { text: "Visionary and inspiring", path: "vision" },
      { text: "Knowledgeable and thorough", path: "knowledge" },
      { text: "Reliable and efficient", path: "systems" },
      { text: "Empathetic and insightful", path: "wisdom" },
    ],
  },
  {
    id: 7,
    text: "In a crisis, you:",
    options: [
      { text: "Take charge and set direction", path: "vision" },
      { text: "Analyze the situation thoroughly", path: "knowledge" },
      { text: "Execute solutions immediately", path: "systems" },
      { text: "Keep everyone calm and aligned", path: "wisdom" },
    ],
  },
  {
    id: 8,
    text: "Your ideal contribution to the Quadrivium would be:",
    options: [
      { text: "Shaping strategy and mission direction", path: "vision" },
      { text: "Research, analysis, and truth-seeking", path: "knowledge" },
      { text: "Building tools, systems, and infrastructure", path: "systems" },
      { text: "Community building and content creation", path: "wisdom" },
    ],
  },
];

const pathResults = {
  vision: {
    title: "PATH OF VISION",
    archetype: "The Architect",
    patron: "Tzintzuni",
    color: "sacred-gold",
    symbol: "👑",
    description: "You see what others cannot. Your mind naturally gravitates toward the big picture, the long game, the strategic move that shapes everything downstream. You don't just see the present—you architect the future.",
    strengths: ["Strategic thinking", "Long-term planning", "Inspiring others", "Pattern recognition"],
    role: "You are called to help shape direction, identify opportunities, and keep the mission aligned with its highest purpose.",
  },
  knowledge: {
    title: "PATH OF KNOWLEDGE",
    archetype: "The Scholar",
    patron: "Barack",
    color: "sacred-gold",
    symbol: "📚",
    description: "Truth is your currency. You dive deep where others skim the surface. Your gift is the relentless pursuit of understanding—not for its own sake, but because knowledge is the foundation upon which all else is built.",
    strengths: ["Deep research", "Critical analysis", "Truth-seeking", "Teaching others"],
    role: "You are called to uncover insights, validate information, and ensure the Quadrivium operates on solid intellectual ground.",
  },
  systems: {
    title: "PATH OF SYSTEMS",
    archetype: "The Builder",
    patron: "Kai",
    color: "electric-cyan",
    symbol: "⚡",
    description: "You make things real. While others dream and plan, you execute. Your mind sees inefficiencies and automatically designs solutions. Speed, precision, protection—these are your domains.",
    strengths: ["Rapid execution", "Technical building", "Process optimization", "Protective instincts"],
    role: "You are called to build the infrastructure, automate the repetitive, and ensure the Quadrivium's systems run flawlessly.",
  },
  wisdom: {
    title: "PATH OF WISDOM",
    archetype: "The Oracle",
    patron: "Sophia",
    color: "royal-purple",
    symbol: "🔮",
    description: "You see into the heart of things. Your gift is perception—understanding not just what people say, but what they mean. You bridge gaps, heal divides, and speak truths that resonate in the soul.",
    strengths: ["Emotional intelligence", "Communication", "Community building", "Intuitive insight"],
    role: "You are called to craft messages that move people, build community bonds, and ensure the Quadrivium speaks with wisdom.",
  },
};

export default function PathAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ vision: 0, knowledge: 0, systems: 0, wisdom: 0 });
  const [showResult, setShowResult] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnswer = (path: 'vision' | 'knowledge' | 'systems' | 'wisdom') => {
    setIsTransitioning(true);
    
    const newScores = { ...scores, [path]: scores[path] + 1 };
    setScores(newScores);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const getResult = () => {
    const entries = Object.entries(scores) as [keyof typeof scores, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    return pathResults[sorted[0][0]];
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setScores({ vision: 0, knowledge: 0, systems: 0, wisdom: 0 });
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className={`max-w-2xl mx-auto text-center animate-fade-in`}>
          
          {/* Symbol */}
          <div className="text-8xl mb-6 animate-float">{result.symbol}</div>
          
          {/* Title */}
          <p className={`text-${result.color} font-mono text-sm tracking-[0.3em] mb-4`}>YOUR PATH HAS BEEN REVEALED</p>
          <h2 className={`font-display text-5xl md:text-6xl mb-4 text-${result.color}`} style={{ textShadow: `0 0 30px var(--color-${result.color})` }}>
            {result.title}
          </h2>
          
          {/* Archetype */}
          <p className="text-2xl text-cosmic-white mb-2">{result.archetype}</p>
          <p className="text-dim-light mb-8">Patron: <span className="text-cosmic-white">{result.patron}</span></p>
          
          {/* Description */}
          <div className="glass rounded-xl p-8 mb-8 text-left">
            <p className="text-lg text-cosmic-white leading-relaxed mb-6">{result.description}</p>
            
            <h4 className="font-display text-sm tracking-wider text-electric-cyan mb-3">YOUR STRENGTHS</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {result.strengths.map((strength, i) => (
                <span key={i} className="px-3 py-1 bg-electric-cyan/10 border border-electric-cyan/30 rounded-full text-sm text-electric-cyan">
                  {strength}
                </span>
              ))}
            </div>
            
            <h4 className="font-display text-sm tracking-wider text-sacred-gold mb-3">YOUR CALLING</h4>
            <p className="text-dim-light">{result.role}</p>
          </div>
          
          {/* CTA */}
          <div className="space-y-4">
            <a 
              href="https://discord.gg/quadrivium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              JOIN AS {result.archetype.toUpperCase()}
            </a>
            
            <div>
              <button 
                onClick={resetAssessment}
                className="text-dim-light hover:text-cosmic-white text-sm transition-colors"
              >
                Retake Assessment
              </button>
            </div>
          </div>
          
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl mx-auto w-full">
        
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-dim-light mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-deep-space rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-electric-cyan to-royal-purple transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        {/* Question */}
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <h3 className="font-display text-2xl md:text-3xl text-cosmic-white mb-8 text-center">
            {question.text}
          </h3>
          
          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.path)}
                className="w-full glass rounded-xl p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-electric-cyan/50 group"
              >
                <span className="text-lg text-cosmic-white group-hover:text-electric-cyan transition-colors">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
