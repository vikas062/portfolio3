import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, MessageSquare, Image } from "lucide-react";

const PlaygroundSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="playground" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Interactive Demos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            AI <span className="text-gradient">Playground</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlaygroundCard
            icon={MessageSquare}
            title="Sentiment Analyzer"
            description="Analyze the sentiment of any text"
            delay={0}
            isInView={isInView}
          >
            <SentimentDemo />
          </PlaygroundCard>

          <PlaygroundCard
            icon={Image}
            title="Image Classifier"
            description="Classify images into categories"
            delay={0.1}
            isInView={isInView}
          >
            <ClassifierDemo />
          </PlaygroundCard>

          <PlaygroundCard
            icon={Sparkles}
            title="AI Chatbot"
            description="Chat with an AI assistant"
            delay={0.2}
            isInView={isInView}
          >
            <ChatDemo />
          </PlaygroundCard>
        </div>
      </div>
    </section>
  );
};

const PlaygroundCard = ({
  icon: Icon,
  title,
  description,
  delay,
  isInView,
  children,
}: {
  icon: any;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay }}
    className="glass rounded-xl p-6 flex flex-col"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon size={16} className="text-primary" />
      </div>
      <h3 className="font-semibold text-sm">{title}</h3>
    </div>
    <p className="text-xs text-muted-foreground mb-4">{description}</p>
    <div className="flex-1">{children}</div>
  </motion.div>
);

const SentimentDemo = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<null | { label: string; score: number }>(null);

  const analyze = () => {
    if (!text.trim()) return;
    const positiveWords = ["great", "amazing", "love", "good", "happy", "excellent", "wonderful", "best", "fantastic"];
    const negativeWords = ["bad", "terrible", "hate", "awful", "worst", "horrible", "sad", "angry", "poor"];
    const lower = text.toLowerCase();
    const posCount = positiveWords.filter((w) => lower.includes(w)).length;
    const negCount = negativeWords.filter((w) => lower.includes(w)).length;

    if (posCount > negCount) setResult({ label: "😊 Positive", score: 0.7 + Math.random() * 0.25 });
    else if (negCount > posCount) setResult({ label: "😔 Negative", score: 0.6 + Math.random() * 0.3 });
    else setResult({ label: "😐 Neutral", score: 0.45 + Math.random() * 0.1 });
  };

  return (
    <div className="space-y-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="w-full bg-muted/50 border border-border rounded-lg p-3 text-xs text-foreground placeholder:text-muted-foreground resize-none h-20 focus:outline-none focus:border-primary/50 transition-colors"
      />
      <button
        onClick={analyze}
        className="w-full bg-primary/10 border border-primary/30 text-primary text-xs py-2 rounded-lg hover:bg-primary/20 transition-colors"
      >
        Analyze
      </button>
      {result && (
        <div className="glass rounded-lg p-3 text-center">
          <p className="text-lg mb-1">{result.label}</p>
          <p className="text-xs text-muted-foreground">Confidence: {(result.score * 100).toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
};

const ClassifierDemo = () => {
  const [selected, setSelected] = useState<null | string>(null);
  const categories = [
    { emoji: "🐱", label: "Cat", confidence: 94.2 },
    { emoji: "🐶", label: "Dog", confidence: 3.1 },
    { emoji: "🐰", label: "Rabbit", confidence: 2.7 },
  ];

  return (
    <div className="space-y-3">
      <div
        onClick={() => setSelected("cat")}
        className="w-full h-24 glass rounded-lg flex items-center justify-center cursor-pointer hover:border-primary/30 transition-all"
      >
        {!selected ? (
          <p className="text-xs text-muted-foreground">Click to classify sample image</p>
        ) : (
          <span className="text-4xl">🐱</span>
        )}
      </div>
      {selected && (
        <div className="space-y-2">
          {categories.map((c) => (
            <div key={c.label} className="flex items-center gap-2">
              <span className="text-sm">{c.emoji}</span>
              <span className="text-xs flex-1">{c.label}</span>
              <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${c.confidence}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
              <span className="text-xs text-muted-foreground w-10 text-right">{c.confidence}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm Kriti's AI assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const responses = [
    "Kriti specializes in Machine Learning and Deep Learning!",
    "She's currently in her 3rd year at Lovely Professional University.",
    "Check out her AI NutriCare project — it's really cool!",
    "Kriti is passionate about NLP and computer vision.",
    "She's aiming to become an AI Engineer!",
  ];

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    const botMsg = { role: "bot", text: responses[Math.floor(Math.random() * responses.length)] };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="space-y-3">
      <div className="h-32 overflow-y-auto space-y-2 pr-1">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <span
              className={`text-xs px-3 py-1.5 rounded-lg max-w-[85%] ${
                m.role === "user"
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask something..."
          className="flex-1 bg-muted/50 border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
        />
        <button
          onClick={send}
          className="bg-primary/10 border border-primary/30 text-primary text-xs px-3 rounded-lg hover:bg-primary/20 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PlaygroundSection;
