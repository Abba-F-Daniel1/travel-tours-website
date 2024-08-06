const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto text-center">
        <div className="text-xl font-display mb-4">WanderSphere</div>
        <div className="mb-4">
          <p>&copy; {new Date().getFullYear()} WanderSphere. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-accent hover:underline">Privacy Policy</a>
          <a href="#" className="text-accent hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
