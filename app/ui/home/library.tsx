import IcVector from "../assets/svg/vector";

const Library = () => {
  const data = [
    {
      name: "EA SPORTS™ FIFA 23 Ultimate Edition",
      image: "/images/fifa.png",
      platforms: ["PS5"],
      price: "$38.00",
      discount: "60%",
      originalPrice: "$95.00"
    },

    {
      name: "Death Stranding Director’s Cut Digital Deluxe Edition",
      image: "/images/dsd.png",
      platforms: ["PS5"],
      price: "$29.00",
      discount: "50%",
      originalPrice: "$58.00"
    },

    {
      name: "Assassin's Creed Origins - Digital Gold Edition",
      image: "/images/assasins.png",
      platforms: ["PS4", "PS5"],
      price: "34.00$",
      discount: "50%",
      originalPrice: "$68.00"
    },

    {
      name: "Sid Meier’s Civilization® VI Platinum Edition",
      image: "/images/civilization.png",
      platforms: ["PS4"],
      price: "$14.00",
      discount: "50%",
      originalPrice: "$28.00"
    }
  ];

  return (
    <div className="max-w-[846px] w-full flex flex-col items-center justify-center gap-[21px] mt-[26px]">
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="
            w-[8px]
            h-[8px]
            bg-indicator
            rounded-full
          "></div>
          <h2 className="text-white text-xl ml-[10px]">Library</h2>
        </div>

        <div className="flex gap-[10px] items-center cursor-pointer">
          <p className="text-gray-400">See more</p>

          <IcVector />
        </div>
      </header>

      <ul className="w-full flex justify-between items-center gap-[26px]">
        {data.map((item, index) => (
          <li key={index} className="max-w-[192px] min-h-[241px] flex flex-col items-start justify-center">
            <img src={item.image} alt={item.name} className="w-full h-[146px]" />

            <div className="flex flex-col items-start justify-center gap-[5px]">
              <div className="flex items-center gap-[5px] mt-[10px]">
                {item.platforms.map((platform, index) => (
                  <div key={index} className="
                    w-[full]
                    bg-platform
                    rounded-[5px]
                    flex items-center justify-center
                  ">
                    <p className="text-[#768192] text-[10px]">{platform}{index !== item.platforms.length - 1 && " •"}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-white text-sm">{item.name}</h3>

              <div className="flex gap-[10px] items-center">
                <p className="text-white text-[10px] bg-orange-400 px-[10px] py-[5px] rounded-full">{item.discount}</p>
                <p className="text-[#768192] text-[10px] line-through">{item.originalPrice}</p>
                <p className="text-white text-[10px]">{item.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default Library;