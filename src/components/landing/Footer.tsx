import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Moon, Github, Twitter, Mail } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { RevealLine } from "./TextReveal";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Preview", href: "#preview" },
  { label: "How it Works", href: "#how-it-works" },
];

const seoLinks = [
  { label: "Photo Secure Storage App", href: "/features/photo-secure-storage-app" },
  { label: "Private Video Downloader App", href: "/features/private-video-downloader-app" },
  { label: "Encrypted Media App", href: "/features/encrypted-media-app" }
];

const socialIcons = [
  { icon: Github, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Mail, href: "#" },
];

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer ref={ref} className="relative border-t border-border/50 py-16 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/3 blur-[150px] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Moon className="w-6 h-6 text-primary" />
            </motion.div>
            <span className="font-display text-xl font-bold"><RevealLine>NightLibrary</RevealLine></span>
          </motion.div>

          {/* Links with stagger */}
          <div className="flex gap-8">
            {footerLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -2, color: "hsl(270 80% 60%)" }}
                className="relative text-sm text-muted-foreground transition-colors group"
              >
                <RevealLine delay={i * 0.04}>{link.label}</RevealLine>
                <motion.span
                  className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* SEO Use Cases / Features Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-2xl mx-auto mt-2">
            {seoLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative text-xs text-muted-foreground/60 hover:text-primary transition-colors group"
              >
                <Link to={link.href}>
                  <RevealLine delay={i * 0.04}>{link.label}</RevealLine>
                </Link>
                <motion.span
                  className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {socialIcons.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.2, y: -3, boxShadow: "0 0 20px hsl(270 80% 60% / 0.2)" }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Divider with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            <RevealLine>© 2026 NightLibrary. Your media, your rules.</RevealLine>
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
