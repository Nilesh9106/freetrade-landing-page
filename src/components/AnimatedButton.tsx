"use client";
import { useRef } from "react";

type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      {...props}
      ref={ref}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (ref.current) {
          ref.current.style.background = `radial-gradient(circle 40px at ${x}px ${y}px, #D358D7, #8658d7 100%)`;
        }
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.background = `#8658d7`;
        }
      }}
      className={`bg-[#8658d7] text-white py-3 px-5 rounded ${className} `}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
