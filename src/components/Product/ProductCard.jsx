import { Link } from 'react-router-dom';
import LazyImage from '../common/LazyImage';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
        <LazyImage 
          src={product.images[0]} 
          alt={product.name}
          width="100%"
          height="200px"
          className="transition-opacity duration-300 group-hover:opacity-90"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-blue-800">{product.name}</h3>
          <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;