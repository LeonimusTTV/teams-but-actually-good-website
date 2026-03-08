import { motion } from "framer-motion";
import "./InfoGrid.css";

interface InfoCardData {
  num: string;
  title: string;
  body: string;
}

interface InfoGridProps {
  cards: InfoCardData[];
  cols?: 2 | 3;
}

export default function InfoGrid({ cards, cols = 3 }: InfoGridProps) {
  return (
    <div className={`info-grid info-grid--${cols}col`}>
      {cards.map((card, i) => (
        <motion.div
          key={card.num}
          className="info-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.55,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="info-card-num">{card.num}</span>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
