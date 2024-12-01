import clsx from "clsx";
import IcVector from "../assets/svg/vector";

const Friends = () => {
  const friendsList = [
    {
      name: "Ava Max",
      online: true,
      avatar: "/images/ava-max.jpg"
    },

    {
      name: "The Weeknd",
      online: true,
      avatar: "/images/the-weeknd.jpg"
    }
  ];

  return (
    <div className="max-w-[376px] w-full flex flex-col items-center justify-center gap-[24px]">
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="
            w-[8px]
            h-[8px]
            bg-indicator
            rounded-full
          "></div>
          <h2 className="text-white text-xl ml-[10px]">Friends List</h2>
        </div>

        <div className="flex gap-[10px] items-center cursor-pointer">
          <p className="text-gray-400">See more</p>

          <IcVector />
        </div>
      </header>

      <ul className="w-full flex flex-col justify-center items-center bg-primary px-[24px] rounded-xl gap">
        {friendsList.map((friend, index) => (
          <li key={index} className={clsx("w-full flex items-center justify-between gap-[16px] min-h-[73px]", {
            "border-b border-gray-800": index !== friendsList.length - 1
          })}>
            <div className="w-full flex items-center justify-between gap-[10px]">
              <div className="flex items-center gap-[10px]">
                <img src={friend.avatar} alt={friend.name} className="w-[32px] h-[32px] rounded-lg" />

                <div className="flex flex-col">
                  <p className="text-white text-sm">{friend.name}</p>

                  <span className="text-gray-400 text-xs flex items-center gap-[5px]">{friend.online && <div className="w-[8px] h-[8px] bg-indicator rounded-full"></div>} {friend.online ? "Online" : "Offline"}</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-start-gradient to-end-gradient rounded-full text-white py-[2px] px-[14px] hover:opacity-70">Add +</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;