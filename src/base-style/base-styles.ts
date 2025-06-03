const MainColors = {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40'
}

const BaseStyles = {
    colors: MainColors,
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '1.5',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px'
    },
    zIndex: {
        modal: 1050,
        dropdown: 1000,
        tooltip: 1100
    },
    breakpoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '992px',
        largeDesktop: '1200px'
    }
};

const BaseStylesTailwind = {
    colors: {
        primary: MainColors.primary,
        secondary: MainColors.secondary,
        success: MainColors.success,
        danger: MainColors.danger,
        warning: MainColors.warning,
        info: MainColors.info,
        light: MainColors.light,
        dark: MainColors.dark
    },
    fontFamily: 'font-sans',
    fontSize: 'text-base',
    lineHeight: 'leading-relaxed',
    borderRadius: 'rounded',
    boxShadow: 'shadow',
    transition: 'transition-all duration-300 ease-in-out',
    spacing: {
        small: 'space-y-2',
        medium: 'space-y-4',
        large: 'space-y-6'
    },
    zIndex: {
        modal: 'z-50',
        dropdown: 'z-40',
        tooltip: 'z-60'
    },
    breakpoints: {
        mobile: 'sm',
        tablet: 'md',
        desktop: 'lg',
        largeDesktop: 'xl'
    }
};

export { BaseStyles, BaseStylesTailwind, MainColors };