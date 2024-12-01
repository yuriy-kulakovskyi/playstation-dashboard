import Image from "next/image";
import IcSeen from "../assets/svg/checklist";
import IcDynamic from "../assets/svg/dynamic";
import IcSend from "../assets/svg/send";

const Chat = () => {
  return (
    <div className="min-w-[378px] w-full flex flex-col justify-center items-center gap-[24px]">
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="
            w-[8px]
            h-[8px]
            bg-indicator
            rounded-full
          "></div>
          <h2 className="text-white text-xl ml-[10px]">Party Chat</h2>
        </div>
        
        <div className="flex gap-[4px] items-center">
          <div className="
            w-[6px]
            h-[6px]
            bg-[#768192]
            rounded-full
          "></div>

          <div className="
            w-[6px]
            h-[6px]
            bg-[#768192]
            rounded-full
          "></div>
        </div>
      </header>

      <div className="
        w-full
        bg-primary
        min-h-[442px]
        rounded-lg
        p-[24px]
      ">
        <div className="
          w-full
          flex
          justify-between
          items-center
          border-b
          border-[#e5e7eb1f]
          pb-[24px]
        ">
          <h1 className="
            text-white
            text-[12px]
            font-semibold
          ">Your party members</h1>

          <div className="flex">
            <Image 
              src="/images/ava-max.jpg"
              width={24}
              height={24}
              alt="Member"
              className="rounded-full relative"
            />
            <Image 
              src="/images/ed-sheeran.jpg"
              width={24}
              height={24}
              alt="Member"
              className="rounded-full relative right-[7px]"
            />
            <div
              className="
                w-[24px]
                h-[24px]
                bg-[#768192]
                rounded-full
                text-white
                text-[10px]
                flex 
                justify-center
                items-center
                relative
                right-[14px]
              "
            >
              4+
            </div>
          </div>
        </div>

        <div className="
          w-full
        ">
          <h4 className="text-center text-[#768192] mt-[20px] text-[10px]">
            Today, 28 May
          </h4>

          <div className="mt-[26px] w-full flex flex-col gap-[36px]">
            <div className="w-full flex justify-start items-start gap-[14px]">
              <Image 
                src="/images/ava-max.jpg"
                width={38}
                height={38}
                alt="Member"
                className="rounded-full"
              />

              <div className="w-full flex flex-col gap-[10px]">
                <div className="bg-theme w-full px-[16px] py-[12px] rounded-br-lg rounded-bl-lg rounded-tr-lg">
                  <h4 className="text-white text-[12px]">Ava Max</h4>
                  <p className="text-[#768192] text-[10px] mt-[7px]">Stay there im coming eze. Watch out for the enemies behind</p>
                </div>

                <div className="w-full flex justify-between items-center px-[14px]">
                  <p className="text-[#768192] text-[10px]">14 min ago</p>
                  <IcSeen />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-start items-start gap-[14px]">
              <div className="w-full flex flex-col gap-[10px]">
                <div className="bg-gradient-to-r from-start-gradient to-end-gradient w-full px-[16px] py-[12px] rounded-br-lg rounded-bl-lg rounded-tl-lg">
                  <h4 className="text-white text-[12px]">Ed Sheeran</h4>
                  <p className="text-white text-[10px] mt-[7px]">I will be waiting. Collect the others we will attack the enemy</p>
                </div>

                <div className="w-full flex justify-between items-center px-[14px]">
                  <p className="text-[#768192] text-[10px]">10 min ago</p>
                  <IcSeen />
                </div>
              </div>
              
              <Image 
                src="/images/ed-sheeran.jpg"
                width={38}
                height={38}
                alt="Member"
                className="rounded-full"
              />              
            </div>
          </div>
        </div>

        <div className="mt-[44px] flex items-center gap-[8px]">
          <div
            className="
              w-full
              py-[12px]
              px-[16px]
              rounded-md
              bg-theme
              flex
              items-center
              justify-start
              gap-[12px]
            "
          >
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
              placeholder="Type a message..."
            />

            <IcDynamic />
          </div>
          <button className="
            w-[48px]
            h-[48px]
            bg-gradient-to-b from-start-gradient to-end-gradient
            flex
            justify-center
            items-center
            rounded-lg
            hover:opacity-80
          ">
            <IcSend />
          </button>
        </div>
        
      </div>
    </div>
  );
}
 
export default Chat;