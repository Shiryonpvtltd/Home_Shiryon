import { motion } from 'framer-motion';
import { useState } from 'react';

interface Job {
  id: string;
  title: string;
  description: string;
  skills: string[];
  location: string;
  isRemote: boolean;
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Fashion Designer',
    description: 'Create innovative and functional designs for our premium gym apparel collection.',
    skills: ['Pattern Making', 'Technical Design', 'Fabric Knowledge', 'Adobe Illustrator'],
    location: 'Hyderabad',
    isRemote: false,
  },
  {
    id: '2',
    title: 'Product Development Manager',
    description: 'Lead the development of high-performance gym wear from concept to production.',
    skills: ['Product Development', 'Supply Chain', 'Quality Control', 'Fabric Technology'],
    location: 'Hyderabad',
    isRemote: false,
  },
  {
    id: '3',
    title: 'Marketing Specialist',
    description: 'Drive brand awareness and engagement in the fitness apparel market.',
    skills: ['Social Media', 'Content Strategy', 'Digital Marketing', 'Brand Development'],
    location: 'Hyderabad',
    isRemote: true,
  },
  {
    id: '4',
    title: 'Production Manager',
    description: 'Oversee manufacturing processes and ensure quality standards in our gym wear production.',
    skills: ['Production Planning', 'Quality Assurance', 'Supply Chain', 'Manufacturing'],
    location: 'Hyderabad',
    isRemote: false,
  },
  {
    id: '5',
    title: 'Fashion Content Writer',
    description: 'Create engaging content that connects with fitness enthusiasts and showcases our products.',
    skills: ['Content Writing', 'Fashion Journalism', 'Social Media', 'SEO'],
    location: 'Remote',
    isRemote: true,
  },
  {
    id: '6',
    title: 'Retail Operations Manager',
    description: 'Manage retail operations and drive sales through strategic partnerships.',
    skills: ['Retail Management', 'Sales Strategy', 'Inventory Management', 'Team Leadership'],
    location: 'Hyderabad',
    isRemote: false,
  },
];

const OpenOpportunitiesSection = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Open Opportunities
          </h2>
          <p className="text-xl text-gray-400">
            Join our team and help shape the future of fitness wear
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredCard(job.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer border border-gray-800 hover:border-red-500/50 transition-colors duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <span className="mr-2">📍</span>
                  {job.location}
                  {job.isRemote && (
                    <span className="ml-2 px-2 py-1 bg-green-900/50 text-green-300 rounded-full text-xs">
                      Remote
                    </span>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Job Details Modal */}
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-lg max-w-2xl w-full p-6 border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedJob.title}
              </h3>
              <p className="text-gray-400 mb-6">{selectedJob.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Location</h4>
                <p className="text-gray-400">
                  {selectedJob.location}
                  {selectedJob.isRemote && ' (Remote position available)'}
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Close
                </button>
                <a
                  href="#apply"
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => setSelectedJob(null)}
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OpenOpportunitiesSection; 