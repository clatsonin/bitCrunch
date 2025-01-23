import ChatBot from "@/_components/ChatBot";
import Footer from "@/_components/Footer";
import LineGraph from "@/_components/LineGraph";
import Menu from "@/_components/Menu";
import Navbar from "@/_components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      {/* Navbar */}
      <div className="py-1">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex h-full">
        {/* Menu - 2 parts */}
        <div className="flex-[2] p-2">
          <Menu />
        </div>

        {/* ChatBot - 4 parts */}
        <div className="flex-[4] p-2">
          <ChatBot />
        </div>

        {/* LineGraph - 4 parts */}
        <div className="flex-[4] p-2">
          <LineGraph />
        </div>
      </div>
    </div>
  );
}
