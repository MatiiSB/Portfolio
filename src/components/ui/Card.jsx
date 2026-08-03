import { cn } from '../../utils/cn';

// Contenedor de tarjeta del design system.
const Card = ({
  as: Tag = 'div',
  variant = 'default',
  hover = false,
  className,
  children,
  ...props
}) => {
  const variantClass = {
    default: '',
    glass: 'card--glass',
    outline: 'card--outline',
  }[variant];

  return (
    <Tag
      className={cn('card', variantClass, hover && 'card--hover', className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Card;
