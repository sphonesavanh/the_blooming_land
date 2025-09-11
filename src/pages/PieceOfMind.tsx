import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Logo from "/images/blm_logo.png";
import DailyCard from "../components/pages/DailyCard";
import DailyNote from "../components/pages/DailyNote";

const PieceOfMind: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center">
      <Link
        to="/content"
        className="flex flex-row items-center hover:translate-y-7/120 transition-transform"
      >
        <ArrowBackIcon />
        <h1 className="font-serif text-4xl text-[#493a2f]">Piece of Minds</h1>
      </Link>
      <div className="flex flex-row items-center justify-end px-8">
        {/* Logo */}
        <img src={Logo} alt="Bloomin' Land Logo" className="w-28 h-auto" />
        {" "}
      </div>
      <div className="border-4 border-[#493a2f]" />
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyNote />
    </div>
  );
};

export default PieceOfMind;


// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { Link } from "react-router-dom";
// import Logo from "/images/blm_logo.png";
// import DailyCard from "../components/pages/DailyCard";
// import DailyNote from "../components/pages/DailyNote";

// const DailyThought: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center">
//       <Link
//         to="/content"
//         className="flex flex-row items-center hover:translate-y-7/120 transition-transform"
//       >
//         <ArrowBackIcon />
//         <h1 className="font-serif text-4xl text-[#493a2f]">Daily Thoughts</h1>
//       </Link>
//       <div className="flex flex-row items-center justify-end px-8">
//         {/* Logo */}
//         <img src={Logo} alt="Bloomin' Land Logo" className="w-28 h-auto" />
//       </div>
//       <div className="border-4 border-[#493a2f]" />
//       <DailyCard />
//       <DailyCard />
//       <DailyCard />
//       <DailyCard />
//       <DailyNote />
//     </div>
//   );
// };

// export default DailyThought;
