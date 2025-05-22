import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '💰',
    title: 'Competitive Salary',
    description: 'We offer competitive compensation packages that reflect your skills and experience.',
  },
  {
    icon: '💪',
    title: 'Health & Fitness Perks',
    description: 'Free gym membership and wellness programs to keep you at your best.',
  },
  {
    icon: '🚀',
    title: 'Innovative Culture',
    description: 'Work in a dynamic environment that encourages creativity and innovation.',
  },
  {
    icon: '📈',
    title: 'Career Growth',
    description: 'Clear paths for advancement and continuous learning opportunities.',
  },
  {
    icon: '🏠',
    title: 'Flexible Work',
    description: 'Remote work options and flexible hours to maintain work-life balance.',
  },
  {
    icon: '🎯',
    title: 'Impact',
    description: 'Make a real difference in the fitness industry with cutting-edge products.',
  },
];

const WhyShiryonSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Join Shiryon?
          </h2>
          <p className="text-xl text-gray-400">
            We're building more than just gym wear - we're creating a movement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-black rounded-xl p-6 border border-gray-800 hover:border-red-500/50 transition-colors duration-300"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400 mb-8">
            Join us in our mission to revolutionize the fitness apparel industry
          </p>
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/20"
          >
            Apply Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyShiryonSection; 