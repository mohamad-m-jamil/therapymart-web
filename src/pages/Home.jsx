import { useState, useEffect } from 'react';
import ProductCard from '../components/Product/ProductCard';
import ProductSearch from '../components/Product/ProductSearch';
import { getAllProducts } from '../data/products';
import '../style.css'; // Ensure this path is correct

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    const fetchedProducts = getAllProducts();
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
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
      
      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p className="no-products-message">No products found. Try a different search term.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
