import AnimatedButton2 from "./AnimatedButton2";

const OpenYourAccount = () => {
  return (
    <div className="py-24 flex flex-col gap-10 justify-center items-center text-center">
      <div>
        <h3 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl uppercase font-extrabold tracking-tighter  font-sans">
          Your gateway to
        </h3>
        <h3 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl uppercase font-extrabold tracking-tighter  font-sans">
          commission-free investing
        </h3>
      </div>
      <AnimatedButton2 className="uppercase tracking-widest md:text-lg max-sm:text-sm px-6">
        Open your Account now
      </AnimatedButton2>
    </div>
  );
};

export default OpenYourAccount;
