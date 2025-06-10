import React from 'react';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSkeleton?: boolean;
  href?: string;
  children?: React.ReactNode;
}

export const ReactBaseButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, BaseButtonProps>(
  ({ isSkeleton = false, href, children, className = '', ...props }, ref) => {
    // Default button classes matching BaseButton.astro
    const defaultClasses = 'text-base leading-normal bg-button-background py-2.5 px-4 tracking-wide border border-dropdown-border rounded-xl font-default transition-all duration-200 hover:bg-button-hover-background hover:shadow-lg hover:shadow-border/50 focus:ring-2 focus:ring-focus';
    
    let finalClasses = className ? `${defaultClasses} ${className}` : defaultClasses;
    
    if (isSkeleton) {
      finalClasses += ' bg-gray-200 text-gray-400 cursor-not-allowed animate-pulse hover:bg-gray-200';
    }
    
    if (props.disabled) {
      finalClasses += ' cursor-not-allowed opacity-50';
    }
    
    if (href) {
      finalClasses += ' inline-flex items-center justify-center';
      return (
        <a href={href} className={finalClasses} ref={ref as React.Ref<HTMLAnchorElement>} {...(props as any)}>
          {children}
        </a>
      );
    }
    
    return (
      <button 
        type={props.type || 'button'} 
        className={finalClasses} 
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);
