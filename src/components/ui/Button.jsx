import { cn } from '../../utils/cn';

// Botón del design system. `as` permite renderizar <a> u otro elemento.
const Button = ({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const variantClass = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    ghost: 'btn--ghost',
  }[variant];
  const sizeClass = {
    sm: 'btn--sm',
    md: '',
    lg: 'btn--lg',
  }[size];

  return (
    <Tag className={cn('btn', variantClass, sizeClass, className)} {...props}>
      {children}
    </Tag>
  );
};

export default Button;
