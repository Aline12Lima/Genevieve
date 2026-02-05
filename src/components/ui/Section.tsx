interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
