import "./InfoGrid.css";
import Reveal from "./Reveal";

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
        <Reveal key={card.num} className="info-card" delay={i * 0.1} y={24}>
          <span className="info-card-num">{card.num}</span>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
