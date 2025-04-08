import { useState, useEffect } from 'react';
import ProductCard from '../components/Product/ProductCard';
import ProductSearch from '../components/Product/ProductSearch';
import { getAllProducts } from '../data/products';
import '../style.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Add the home-page class to the body when component mounts
    document.body.classList.add('home-page');
    
    // Remove the class when component unmounts
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);
  
  useEffect(() => {
    const fetchProducts = () => {
      setIsLoading(true);
      const fetchedProducts = getAllProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      setIsLoading(false);
    };
    
    fetchProducts();
    
    // Add fade-in effect to products when they load
    const timeout = setTimeout(() => {
      const productElements = document.querySelectorAll('.product-card');
      productElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1';
        }, index * 100);
      });
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      return;
    }
    
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Medical Supply Store</h1>
        <p className="home-subtitle">Find the best products for your clinic and home care</p>
        <div className="product-search-wrapper">
          <ProductSearch onSearch={handleSearch} />
        </div>
      </div>
      
      {isLoading ? (
        <div className="loading-container">
          <p className="loading-text">Loading products...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="no-products">
          <p className="no-products-message">No products found. Try a different search term.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              style={{ opacity: 0, transition: 'opacity 0.5s ease', transitionDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;