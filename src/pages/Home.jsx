import { useState, useEffect } from 'react';
import ProductCard from '../components/Product/ProductCard';
import ProductSearch from '../components/Product/ProductSearch';
import { getAllProducts } from '../data/products';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    // Fetch products (in a real app, this would be an API call)
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Medical Supply Store</h1>
        <ProductSearch onSearch={handleSearch} />
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">No products found. Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;