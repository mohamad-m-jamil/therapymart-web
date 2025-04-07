import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">MediMerch</h3>
            <p>
              Quality medical merchandise for healthcare professionals.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <FaWhatsapp className="mr-2" /> +1 (123) 456-7890
            </div>
            <div className="flex items-center">
              <FaInstagram className="mr-2" /> @mediclinic
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="/cart" className="hover:underline">My Cart</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} MediMerch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;