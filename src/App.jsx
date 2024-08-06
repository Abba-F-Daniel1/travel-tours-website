import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import BookingConfirmation from "./components/booking/BookingConfirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PaymentForm from "./components/booking/PaymentForm";
import BookingForm from "./components/booking/BookingForm";

const App = () => {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/package/:type/:id" element={<PackageDetails />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
};

export default App;
