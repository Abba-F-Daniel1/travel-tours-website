import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import PackageList from "../components/packages/PackageList";
import { mockTestimonials } from "../mockdata/TestimonialMockData";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <PackageList />
          <Testimonials testimonials={mockTestimonials} />
        </div>
      </section>
    </div>
  );
};

export default Home;
