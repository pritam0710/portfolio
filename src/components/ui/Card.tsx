import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'bordered' | 'glass';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  hoverable = false
}) => {
  const baseClasses = 'rounded-lg transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white shadow-md',
    hover: 'bg-white shadow-md hover:shadow-xl hover:transform hover:scale-105',
    bordered: 'bg-white border border-gray-200 hover:border-primary-300',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverable ? 'cursor-pointer' : ''} ${className}`;

  const cardContent = (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );

  if (hoverable || onClick) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}; 