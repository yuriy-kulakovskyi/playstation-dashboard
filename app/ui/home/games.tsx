import Image from "next/image";
import IcVector from "../assets/svg/vector";

const Games = () => {
  return (
    <div className="w-full max-w-[444px] flex flex-col justify-center items-center gap-[24px]">
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="
            w-[8px]
            h-[8px]
            bg-indicator
            rounded-full
          "></div>
          <h2 className="text-white text-xl ml-[10px]">Game Library</h2>
        </div>
        
        <div className="flex gap-[40px] items-center">
          <IcVector opacity />
          <IcVector />
        </div>
      </header>

      <div className="w-full flex items-center justify-between">
        <Image
          width={210}
          height={146}
          src={"/images/games1.png"}
          alt="games"
        />

        <Image 
          width={210}
          height={146}
          src={"/images/games2.png"}
          alt="games"
        />
      </div>
    </div>
  );
}
 
export default Games;