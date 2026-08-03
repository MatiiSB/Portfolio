import { cn } from '../../utils/cn';

// Pill / tag.
const Badge = ({ variant = 'default', className, children, ...props }) => {
  const variantClass = {
    default: '',
    accent: 'badge--accent',
  }[variant];

  return (
    <span className={cn('badge', variantClass, className)} {...props}>
      {children}
    </span>
  );
};

export default Badge;
