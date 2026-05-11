import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProgressiveImage = ({ src, alt, className, style }: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* High-res Image */}
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isLoaded ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full object-cover"
        onLoad={() => setIsLoaded(true)}
      />

      {/* Glass Placeholder / Skeleton */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 glass-morphism flex items-center justify-center"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 w-full h-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProgressiveImage;
