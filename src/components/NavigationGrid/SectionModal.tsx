import { motion } from "framer-motion";
import { X } from "lucide-react";
import { sectionContent } from "./SectionContent";

interface SectionModalProps {
  sectionKey: string;
  onClose: () => void;
}

export const SectionModal = ({ sectionKey, onClose }: SectionModalProps) => {
  const content = sectionContent[sectionKey];
  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 " />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl max-h-[80vh] glass-card glow-border rounded-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border/50">
          <h2 className="text-xl font-bold text-gradient">{content.title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6 overflow-y-auto text-secondary-foreground leading-relaxed text-sm md:text-base">
          {content.body}
        </div>
      </motion.div>
    </motion.div>
  );
};
