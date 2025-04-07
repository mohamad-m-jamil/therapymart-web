import { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, width, height, className }) => {
  const [imageSrc, setImageSrc] = useState(''); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      });
    });

    // Start observing when component mounts
    const imgElement = document.getElementById(`img-${src.replace(/\//g, '-')}`);
    if (imgElement) observer.observe(imgElement);

    return () => {
      if (imgElement) observer.disconnect();
    };
  }, [src]);

  return (
    <div 
      id={`img-${src.replace(/\//g, '-')}`} 
      className={`relative ${className || ''}`}
      style={{ width, height }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover`}
          onLoad={() => setIsLoading(false)}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default LazyImage;