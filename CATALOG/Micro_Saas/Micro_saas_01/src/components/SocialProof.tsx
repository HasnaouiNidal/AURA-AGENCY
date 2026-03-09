import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "I used to spend 2 hours every evening answering DMs. Now it takes me 15 minutes. This tool is a lifesaver.",
      author: "Sarah J.",
      role: "Boutique Owner",
      rating: 5
    },
    {
      quote: "My response time went from 4 hours to 2 minutes. I've closed 30% more sales this month just by being faster.",
      author: "Mike T.",
      role: "Freelance Designer",
      rating: 5
    },
    {
      quote: "I never know what to say when customers complain. ReplyPro gives me the perfect, professional response every time.",
      author: "Elena R.",
      role: "Salon Manager",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Small Businesses Are Already Saving Hours Every Week
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Join thousands of business owners who have taken back their time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-surface-950 p-8 rounded-2xl shadow-sm border border-white/5 relative"
            >
              <Quote className="absolute top-6 right-6 text-surface-800" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="text-amber-400 fill-amber-400" size={20} />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400 font-bold text-lg border border-primary-500/20">
                  {testimonial.author[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Join Them Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
