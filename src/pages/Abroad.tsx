// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Logo from "/images/blm_logo.png";
import Map from "/images/map.png";
import Flag from "../components/pages/HomeAway/flag";

const Abroad: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center flex flex-row pt-20">
      <header>
        <img
          src={Logo} // Replace with your logo or use text
          alt="Bloomin' Land Logo"
          className="h-40 w-40"
        />
      </header>
      <Link to="/content/life-abroad2">
        <div className="absolute top-40 left-180 align-center">
          Home <br /> Away <br /> From Home
        </div>
      </Link>

      {/* Map */}
      <div className="">
        <img
          src={Map}
          alt="Map"
          className="absolute top-60 left-50 w-auto h-auto ml-60"
        />
      </div>

      {/* Text */}
      <div className="absolute top-80 left-50">
        <p className="text-black">Explore the world with us!</p>
      </div>
      <div className="absolute top-80 right-50">
        <p className="text-black">Explore the world with us!</p>
      </div>

      {/* flag */}
      <div className="absolute top-160">
        <Flag />
      </div>
    </div>
  );
};

export default Abroad;
