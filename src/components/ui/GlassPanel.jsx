import { cn } from '../../utils/cn';

// Panel con efecto glassmorphism.
const GlassPanel = ({ as: Tag = 'div', className, children, ...props }) => (
  <Tag className={cn('glass-panel', className)} {...props}>
    {children}
  </Tag>
);

export default GlassPanel;
