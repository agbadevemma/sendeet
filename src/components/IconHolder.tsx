import Image from "next/image";

type IconHolderProps = {
  src: string;
  className?:string;
};

const IconHolder = ({ src, className }: IconHolderProps) => {
  return (
    <div className={`bg-[#E6F7FE] ${className} shadow-[0px_1.2px_2.4px_0px_rgba(16,_24,_40,_0.10),_0px_0px_0px_1.2px_rgba(185,_189,_199,_0.20)] h-12 w-12 flex items-center justify-center rounded-[9.2px] lg:rounded-[11.2px] border-[1.2px] lg:border-[1.4px] border-solid border-[#004768]`}>
      <Image src={src} alt="icon" />
    </div>
  );
};

export default IconHolder;
