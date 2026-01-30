import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBgVideo from "@/assets/hero-bg-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>
      
      {/* Professional Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary opacity-95" />
      
      {/* Subtle Gold Accent Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[100px]" />
      </div>
      
      {/* Professional Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
              Trusted by 50+ Clients Worldwide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Complete Consulting Solutions for{" "}
            <span className="text-gold">Business, Startups & Academics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl"
          >
            From web development to research documentation, we provide expert guidance 
            and end-to-end support to help you achieve your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground shadow-gold text-base px-8"
              asChild
            >
              <Link to="/contact">
                Get Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-gold text-gold hover:bg-gold hover:text-secondary-foreground text-base px-8 font-semibold"
              asChild
            >
              <a href="tel:+918225811142">
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-primary-foreground/10"
          >
            <div>
              <p className="text-3xl font-bold text-gold">50+</p>
              <p className="text-sm text-primary-foreground/60">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">40+</p>
              <p className="text-sm text-primary-foreground/60">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">7+</p>
              <p className="text-sm text-primary-foreground/60">Services Offered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">3+</p>
              <p className="text-sm text-primary-foreground/60">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
