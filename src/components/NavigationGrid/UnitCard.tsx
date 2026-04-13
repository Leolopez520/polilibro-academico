import { motion } from "framer-motion";
import { type CardData } from "./unit-data";

interface UnitCardProps {
  card: CardData;
  index: number;
  onClick: () => void;
}

export const UnitCard = ({ card, index, onClick }: UnitCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-xl p-5 text-left group cursor-pointer hover:glow-border transition-all duration-300"
    >
      <card.icon
        className={`w-8 h-8 mb-3 ${card.color} transition-transform group-hover:scale-110`}
      />
      <h3 className="font-semibold text-sm text-foreground mb-1">
        {card.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {card.desc}
      </p>
    </motion.button>
  );
};
