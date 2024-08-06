import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
          </div>
        </div>
        <Quote className="w-8 h-8 text-primary-light" />
      </div>
      <p className="text-gray-700 mb-4 italic">{testimonial.comment}</p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill={i < testimonial.rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="text-sm text-gray-600">{testimonial.date}</p>
    </div>
  </motion.div>
);

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-display font-bold text-center mb-8 text-primary-dark">
            What Our Travelers Say
          </h2>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
