import { Link } from "react-router-dom";
import Logo from "/images/blm_logo.png";

const Abroad2: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center flex flex-row pt-20">
      <header>
        <img
          src={Logo} // Replace with your logo or use text
          alt="Bloomin' Land Logo"
          className="h-40 w-40"
        />
      </header>
      <Link to="/content/life-abroad">
        <div className="absolute top-40 left-180 align-center">
          Home <br /> Away <br /> From Home
        </div>
      </Link>

      {/* Card */}
      <div className="flex align-middle absolute top-60 left-50 w-auto h-auto ml-60 gap-5">
        <div className="bg-white w-40 h-40"></div>
        <div className="bg-white w-40 h-40"></div>
        <div className="bg-white w-40 h-40"></div>
        <div className="bg-white w-40 h-40"></div>
      </div>
    </div>
  );
};

export default Abroad2;
