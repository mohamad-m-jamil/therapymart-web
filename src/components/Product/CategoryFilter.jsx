import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../../style.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'medical-equipment', name: 'Medical Equipment' },
    { id: 'electrical-equipment', name: 'Electrical Equipment' },
    { id: 'physical-therapy', name: 'Physical Therapy' }
  ];

  return (
    <div className="category-filter">
      <button 
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Choose Category</span>
        <span className={`icon-wrapper ${isOpen ? 'open' : ''}`}>
          {isOpen ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </span>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => {
                onCategoryChange(category.id);
                setIsOpen(false);
              }}
              className={`dropdown-item ${selectedCategory === category.id ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .category-filter {
          position: relative;
          width: 260px;
          margin-bottom: 25px;
          font-family: inherit;
        }
        
        .dropdown-toggle {
          width: 100%;
          background-color: white;
          border: 1px solid #60a5fa;
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-weight: 500;
          color: #1e40af;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          overflow: hidden;
          position: relative;
        }
        
        .dropdown-toggle::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        
        .dropdown-toggle:hover {
          background-color: #f0f7ff;
          border-color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.15);
        }
        
        .dropdown-toggle:hover::after {
          transform: scaleX(1);
        }
        
        .dropdown-toggle:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }
        
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        
        .icon-wrapper.open {
          transform: rotate(-180deg);
        }
        
        .dropdown-toggle .icon {
          margin-left: 8px;
          color: #3b82f6;
          transition: all 0.2s ease;
        }
        
        .dropdown-toggle:hover .icon {
          transform: scale(1.15);
        }
        
        .dropdown-menu {
          position: absolute;
          width: 100%;
          margin-top: 8px;
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 10;
          overflow: hidden;
          animation: dropDown 0.3s ease-out forwards;
          transform-origin: top center;
        }
        
        @keyframes dropDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scaleY(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
        }
        
        .dropdown-item {
          width: 100%;
          text-align: left;
          padding: 12px 16px;
          background: none;
          border: none;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
          color: #4b5563;
          transition: all 0.2s ease;
          animation: fadeIn 0.3s ease forwards;
          opacity: 0;
          transform: translateX(-10px);
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .dropdown-item:last-child {
          border-bottom: none;
        }
        
        .dropdown-item:hover {
          background-color: #f8fafc;
          color: #2563eb;
          padding-left: 20px;
        }
        
        .dropdown-item.active {
          background-color: #e6f0ff;
          color: #2563eb;
          font-weight: 600;
          position: relative;
        }
        
        .dropdown-item.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: #2563eb;
          animation: slideIn 0.2s ease forwards;
        }
        
        @keyframes slideIn {
          from {
            height: 0;
            top: 50%;
          }
          to {
            height: 100%;
            top: 0;
          }
        }
        
        @media (max-width: 768px) {
          .category-filter {
            width: 100%;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .dropdown-toggle {
            padding: 10px 14px;
          }
          
          .dropdown-item {
            padding: 10px 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryFilter;