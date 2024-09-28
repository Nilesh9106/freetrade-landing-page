import AnimatedButton from "./AnimatedButton";

const StartNow = () => {
  return (
    <div className="py-24 flex flex-col gap-10 justify-center items-center text-center">
      <div>
        <h3 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl uppercase font-extrabold tracking-tighter  font-sans">
          You’re just minutes away from
        </h3>
        <h3 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl uppercase font-extrabold tracking-tighter  font-sans">
          commission-free investing
        </h3>
      </div>
      <AnimatedButton className="uppercase tracking-widest rounded-full md:text-lg max-sm:text-sm px-6">
        start now
      </AnimatedButton>
      <p className="uppercase tracking-wider">
        When you invest, your capital is at risk
      </p>
    </div>
  );
};

export default StartNow;
