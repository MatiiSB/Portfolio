import { cn } from '../utils/cn';

// Wrapper de sección flexible.
// variant: 'default' | 'centered' | 'hero'
const Section = ({ id, variant = 'default', className, children, ...props }) => {
  const variantClass = {
    default: '',
    centered: 'section--centered',
    hero: 'section--hero',
  }[variant];

  return (
    <section
      id={id}
      className={cn('section', variantClass, className)}
      {...props}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
