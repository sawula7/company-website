import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl p-6 transition-all duration-300';

    const variants = {
      default:
        'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md',
      glass:
        'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg',
      gradient:
        'bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 border border-primary-200 dark:border-primary-800 shadow-lg',
    };

    const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
