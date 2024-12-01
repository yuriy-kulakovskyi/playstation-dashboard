import clsx from "clsx";

const Feeds = () => {
  const users = [
    {
      name: "Ava Max",
      paragraph: "Playing God of War Ragnarok",
      image: "/images/ava-max.jpg",
    },

    {
      name: "Ed Sheeran",
      paragraph: "Need for Speed Unbound",
      image: "/images/ed-sheeran.jpg",
    },

    {
      name: "The Weeknd",
      paragraph: "One Piece Odyssey",
      image: "/images/the-weeknd.jpg",
    }
  ];

  return (
    <div className="flex flex-col min-w-[250px] justify-between">
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="
            w-[8px]
            h-[8px]
            bg-indicator
            rounded-full
          "></div>
          <h2 className="text-white text-xl ml-[10px]">Activity Feeds</h2>
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
      <div
        className="
          w-full
          min-h-[73px]
          flex
          flex-col
          justify-center
          items-center
          bg-primary
          rounded-lg
        "
      >
        {users.map((user, index) => (
          <div
            key={index}
            className={clsx("w-full flex gap-[20px] p-[20px] border-b-[1px] ",
            {
              "border-[#1D1D1D]": index !== users.length - 1,
              "border-transparent": index === users.length - 1,
            }
            )}
          >
            <img
              src={user.image}
              alt={user.name}
              className="
                w-[32px]
                h-[32px]
                rounded-lg
                object-cover
              "
            />
            <div className="text-white">
              <h3 className="text-[12px]">{user.name}</h3>
              <p className="text-[8px] opacity-70">{user.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Feeds;