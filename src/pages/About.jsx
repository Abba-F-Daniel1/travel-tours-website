import WanderSphere from "../../public/images/wandersphere.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-display font-bold mb-6 text-primary-dark">
        About WanderSphere
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            WanderSphere is your gateway to unforgettable adventures around the
            world. We believe that travel, hospitality, and tourism has the power to transform lives,
            broaden perspectives, and create lasting memories.
          </p>
          <p className="mb-4">
            Founded in 2024, our mission is to make world-class travel, hotel, and tourism
            experiences accessible to everyone. We curate unique packages that
            blend popular destinations with off-the-beaten-path experiences,
            ensuring that every journey with us is truly special.
          </p>
          <p>
            Our team of experienced travel, hotel, and tourism enthusiasts works tirelessly to
            create itineraries that cater to diverse interests and preferences.
            Whether you are seeking relaxation, adventure, cultural immersion,
            or a mix of everything, we have the perfect package for you.
          </p>
        </div>
        <div>
          <img
            src={WanderSphere}
            alt="WanderSphere"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-display font-bold mb-4 text-primary-dark">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard
            title="Sustainability"
            description="We are committed to responsible tourism and minimizing our environmental impact."
          />
          <ValueCard
            title="Authenticity"
            description="We strive to provide genuine, local experiences that go beyond typical tourist attractions."
          />
          <ValueCard
            title="Customer Satisfaction"
            description="Your happiness is our priority. We go above and beyond to ensure your trip exceeds expectations."
          />
        </div>
      </div>
    </motion.div>
  );
};

const ValueCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
