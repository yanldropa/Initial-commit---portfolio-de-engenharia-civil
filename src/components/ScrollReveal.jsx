import { motion } from "framer-motion";

export default function ScrollReveal({ children, direction = "up", delay = 0, className = "" }) {
  const initial = {
    up: { opacity: 0, y: 28 },
    left: { opacity: 0, x: -28 },
    right: { opacity: 0, x: 28 },
    scale: { opacity: 0, scale: 0.96 }
  }[direction];

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}