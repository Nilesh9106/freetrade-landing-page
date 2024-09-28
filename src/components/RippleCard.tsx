import { useRef } from "react";

const Card = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      {...props}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (ref.current) {
          ref.current.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, #2F2F2F, #151515 100%)`;
        }
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.background = `#151515`;
        }
      }}
      className={`rounded-lg border border-neutral-800 bg-[#151515] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
