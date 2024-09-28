type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};
const AnimatedButton2: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-white text-black group hover:bg-neutral-900 relative hover:text-white transition-all py-3 px-5 rounded-full ${className} `}
    >
      <span className="absolute group-hover:-inset-[1px] block duration-500  -z-20 rounded-full  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 "></span>
      {children}
    </button>
  );
};

export default AnimatedButton2;
