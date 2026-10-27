import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react'; // Ícone aproximado de aspas

function QuoteSection() {
  return (
    <section className="py-24 px-10 bg-[#FDFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-8 md:gap-16">
        
        {/* Ícone (Fade in com leve escala) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="flex-shrink-0"
        >
          <MessageSquareQuote className="w-24 h-24 md:w-32 md:h-32 text-[#C85227]" strokeWidth={1.5} />
        </motion.div>

        {/* Texto (Revelação de baixo para cima) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#C85227] leading-tight mb-6">
            “Quando pessoas, iniciativas e territórios se conectam, surgem novas oportunidades de transformação coletiva.”
          </h2>
          <p className="text-[#5C3D2E] font-bold">
            - Instituto Citrô - 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
}
export default QuoteSection;