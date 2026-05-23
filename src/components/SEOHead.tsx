import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const SEOHead = ({ title, description, canonicalUrl }: SEOHeadProps) => {
  useEffect(() => {
    // Update Title
    document.title = title;
    
    // Update Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Canonical
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [title, description, canonicalUrl]);

  return null;
};

export default SEOHead;
