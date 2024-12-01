const Hero = () => {
  return (
    <div className="
      bg-primary
      p-[40px]
      bg-hero
      bg-cover
      bg-center
      w-[580px]
      min-h-[292px]
      rounded-2xl
    ">
      <h1 className="text-white text-2xl">
        Watch Streaming Games <br />
        Anywhere & Anytime!
      </h1>

      <p className="text-gray-500 text-[10px] mt-[22px]">
        Watch streaming of your favorite games and collect <br />
        the best heroes, anytime and anywhere.
      </p>

      <div className="mt-[33px] bg-gray-800 p-[9px] rounded-full flex items-center justify-start relative max-w-[134px]">
        <h3 className="text-white text-[10px] ml-[15px]">Purchase Now</h3>
        <button
          className="
            w-[28px]
            h-[28px]
            bg-gradient-to-r from-start-gradient to-end-gradient
            rotate-[45deg]
            rounded-full
            flex
            items-center
            justify-center
            absolute
            right-[3px]
            hover:scale-105
          "
        >
          <svg className="rotate-[-45deg]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4.08332 9.91667L9.91666 4.08334" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.08332 4.08334L9.91666 4.08334L9.91666 9.91667" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
 
export default Hero;