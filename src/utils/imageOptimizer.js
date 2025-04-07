/**
 * Generates the optimal image URL based on the original URL and desired dimensions
 * This would typically connect to a CDN or image processing service
 * 
 * @param {string} originalSrc - Original image source URL
 * @param {number} width - Desired width
 * @param {number} height - Desired height (optional)
 * @param {string} format - Image format (webp, avif, jpg, png)
 * @returns {string} - Optimized image URL
 */
export const getOptimizedImageUrl = (originalSrc, width, height = null, format = 'webp') => {
    // In a real application, this would connect to an image CDN like Cloudinary, Imgix, etc.
    // For example: return `https://yourcdn.com/image/optimize?src=${originalSrc}&w=${width}&h=${height}&f=${format}`;
    
    // For demo purposes, we'll just append query parameters to simulate optimization
    const params = new URLSearchParams();
    params.append('w', width);
    if (height) params.append('h', height);
    params.append('f', format);
    
    // Return the "optimized" URL
    return `${originalSrc}?${params.toString()}`;
  };
  
  /**
   * Determines if the browser supports modern image formats
   * 
   * @returns {Object} - Object with boolean flags for format support
   */
  export const getImageFormatSupport = () => {
    if (typeof window === 'undefined') {
      return {
        webp: false,
        avif: false
      };
    }
    
    // Check WebP support
    const webpSupport = document.createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0;
      
    // Check AVIF support (simplified check)
    const avifSupport = false; // In reality, this would be more complex
    
    return {
      webp: webpSupport,
      avif: avifSupport
    };
  };
  
  /**
   * Gets the best image format for the current browser
   * 
   * @returns {string} - Best supported format
   */
  export const getBestImageFormat = () => {
    const support = getImageFormatSupport();
    
    if (support.avif) return 'avif';
    if (support.webp) return 'webp';
    
    return 'jpg'; // Fallback to jpg
  };