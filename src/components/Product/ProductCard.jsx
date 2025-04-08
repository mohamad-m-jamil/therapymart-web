import { Link } from 'react-router-dom';
import LazyImage from '../common/LazyImage';
import '../../style.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-wrapper">
          <LazyImage 
            src={product.images[0]} 
            alt={product.name}
            width="100%"
            height="180px"
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;