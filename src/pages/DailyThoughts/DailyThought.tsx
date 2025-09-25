import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Logo from "/images/blm_logo.png";
import DailyCard from "../../components/pages/DailyCard";
import DailyNote from "../../components/pages/DailyNote";

const DailyThought: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/images/background.png')] bg-cover bg-center">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <Link
          to="/content"
          className="flex flex-row items-center hover:translate-y-4/120 hover:underline transition-transform"
        >
          <ArrowBackIcon />
          <h1 className="font-serif text-2xl text-[#493a2f] pl-3">Back</h1>
        </Link>

        <h1 className="font-serif text-4xl text-[#493a2f]">Daily Thoughts</h1>

        <img src={Logo} alt="Bloomin' Land Logo" className="w-28 h-auto" />
      </div>

      <div className="border-4 border-[#493a2f] shrink-0" />

      {/* Main area fills the rest of the screen */}
      <div className="flex flex-1">
        {/* Left: scrollable DailyCard */}
        <div className="flex-1 overflow-y-auto">
          <DailyCard />
        </div>

        {/* Right: sticky DailyNote */}
        <div className="w-80 shrink-0 sticky top-0 self-start">
          <DailyNote />
        </div>
      </div>
    </div>
  );
};

export default DailyThought;
