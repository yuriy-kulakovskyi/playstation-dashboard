import Games from "../ui/home/games";
import Header from "../ui/header";
import Feeds from "../ui/home/feeds";
import Hero from "../ui/home/hero";
import Friends from "../ui/home/friends";
import Library from "../ui/home/library";
import Chat from "../ui/home/chat";
import MostPlayed from "../ui/home/most-played";

export default function Home() {
  return (
    <div className="w-full">
      <Header />

      <main className="p-[40px] flex items-start w-full">
        <div className="flex flex-col gap-[26px]">
          <div className="min-w-[900px] border-r border-[#e5e7eb1f]">
            <div className="flex gap-[26px]">
              <Hero />
              <Feeds />
            </div>
            <div className="flex gap-[26px] mt-[26px] justify-start items-end">
              <Games />
              <Friends />
            </div>
            <Library />
          </div>
        </div>
        <div className="w-full pl-[44px] flex flex-col gap-[26px]">
          <Chat />
          <MostPlayed />
        </div>
      </main>
    </div>
  );
}
