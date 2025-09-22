// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { Link } from "react-router-dom";
import Logo from "/images/blm_logo.png";
import Map from "/images/map.png";

const Abroad: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center flex flex-row pt-20">
      <header>
        <img
          src={Logo} // Replace with your logo or use text
          alt="Bloomin' Land Logo"
          className="h-30 w-30"
        />
      </header>
      <div className="absolute top-40 left-180 align-center">
        Home <br /> Away <br /> From Home
      </div>
      {/* Map */}
      <div className="">
        <img src={Map} alt="Map" className="absolute top-60 left-50 w-auto h-auto ml-60" />
      </div>

      {/* flag */}
      <div>

      </div>
    </div>
  );
};

export default Abroad;
