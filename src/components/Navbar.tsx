import { Menu } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between z-50  xl:px-20 px-10 h-20 bg-neutral-950/50 backdrop-blur-md">
      <div className="font-semibold px-5  text-lg tracking-wide">Freetrade</div>
      <ul className="flex max-lg:hidden gap-6 items-center">
        <li className="nav-item">Stocks and Shares ISA</li>
        <li className="nav-item">Personal Pension</li>
        <li className="nav-item">General Investment Account</li>
      </ul>
      <div className="flex max-lg:hidden gap-6 items-center">
        <div className="nav-item">Support</div>
        <div className="nav-item">Log in</div>
        <AnimatedButton className="text-sm uppercase">
          Get Started
        </AnimatedButton>
      </div>
      <Menu className="lg:hidden" />
    </nav>
  );
};
export default Navbar;
