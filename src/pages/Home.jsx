// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import ProductCard from '../components/Product/ProductCard';
import ProductSearch from '../components/Product/ProductSearch';
import CategoryFilter from '../components/Product/CategoryFilter';
import { getAllProducts } from '../data/products';
import '../style.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
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
  
  // Handle search input changes
  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProducts(term, selectedCategory);
  };
  
  // Handle category selection changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };
  
  // Filter products based on both search term and category
  const filterProducts = (term, category) => {
    let filtered = products;
    
    // Apply search filter if there's a term
    if (term.trim()) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    // Apply category filter if not "all"
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }
    
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
      
      {/* Add Category Filter */}
      <div className="category-section">
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
      </div>
      
      {isLoading ? (
        <div className="loading-container">
          <p className="loading-text">Loading products...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="no-products">
          <p className="no-products-message">No products found. Try a different search term or category.</p>
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