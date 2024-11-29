import IcSearch from "./assets/svg/search";
import Box from "./button-widget";
import IcNotification from "./assets/svg/notification";
import Image from "next/image";
import IcSettings from "./assets/svg/settings";
import IcBag from "./assets/svg/bag";

const Header = () => {
  return (
    <header className="w-full p-[40px] flex justify-between items-center">
      <div
        className="
          w-[290px]
          py-[12px]
          px-[16px]
          rounded-md
          bg-primary
          flex
          items-center
          justify-start
          gap-[12px]
        "
      >
        <IcSearch />

        <input 
          className="
            w-full
            text-white
            bg-transparent
            focus:outline-none
            text-sm
            font-medium
          "
          type="text" 
          placeholder="Search anything you want..."
        />
      </div>

      <div className="flex gap-[16px]">
        <Box online>
          <IcNotification/>
        </Box>

        <div className="flex items-center gap-[14px] cursor-pointer">
          <Image
            src="/images/video.png"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-lg"
          />

          <h1 className="text-white">Start Stream</h1>
        </div>
      </div>

      <div className="flex gap-[16px] items-center">
        <Box>
          <IcSettings />
        </Box>
        <Box>
          <IcBag />
        </Box>

        <div className="w-[1px] h-[24px] bg-gray-700"></div>

        <div className="flex items-center gap-[14px]">
          <Image
            src="/images/entriflay.avif"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-lg"
          />

          <div className="flex flex-col h-full">
            <h1 className="text-white">Entriflay</h1>

            {/* online */}
            <div className="flex items-center gap-[4px]">
              <div
                className="
                  w-[7px]
                  h-[7px]
                  rounded-full
                  bg-indicator
                "
              ></div>
              <h3 className="text-gray-400 text-xs">Online</h3>
            </div>
          </div>


        </div>
      </div>
    </header>
  );
}
 
export default Header;