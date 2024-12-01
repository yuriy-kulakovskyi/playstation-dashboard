import clsx from "clsx";

const MostPlayed = () => {
  const games = [
    {
      name: "The Witcher 3 : Wild Hunt",
      image: "/images/witcher.png",
      playTime: {
        hours: 3,
        minutes: 45
      }
    },

    {
      name: "WRC 7 FIA World Rally Champion..",
      image: "/images/wrc.png",
      playTime: {
        hours: 2,
        minutes: 30
      }
    }
  ];

  return (
    <div className="min-w-[378px]">
      <header>
        <div className="flex items-center">
          <div className="
            w-[8px]
            h-[8px]
            bg-indicator
            rounded-full
          "></div>
          <h2 className="text-white text-xl ml-[10px]">Most Played</h2>
        </div>
      </header>

      <ul className="w-full mt-[24px] flex flex-col justify-center items-center gap-[16px]">
        {games.map((game, index) => (
          <li key={index} className="relative bg-primary py-[14px] pr-[18px] rounded-lg w-full flex justify-between items-center cursor-pointer transition hover:scale-105 hover:opacity-80">
            <div className="flex justify-start items-center gap-[14px]">
              <div dir="rtl">
                <div className={clsx("bg-indicator h-[20px] w-[2px] rounded-s-lg",
                  {
                    "bg-[#FFA842]": index % 2 !== 0
                  })}></div>
              </div>
              <img src={game.image} alt={game.name} className="w-[56px] h-[56px] rounded-lg" />
              <div>
                <h3 className="text-white text-lg">{game.name}</h3>
                <p className="text-[#9ca3af] text-sm">{game.playTime.hours}h {game.playTime.minutes}m</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[4px]">
              <div className="
                w-[4px]
                h-[4px]
                bg-[#768192]
                rounded-full
              "></div>

              <div className="
                w-[4px]
                h-[4px]
                bg-[#768192]
                rounded-full
              "></div>
            </div>
          </li>
        ))}
      </ul>

      <footer className="mt-[28px] flex justify-center items-center">
        <button className="text-[#768192] text-sm hover:text-white">See More Games &#8594;</button>
      </footer>
    </div>
  );
}

export default MostPlayed;