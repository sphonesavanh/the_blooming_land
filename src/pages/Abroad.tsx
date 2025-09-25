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
        <div className="font-serif absolute top-30 left-180 align-center hover:underline">
          <p className="font-bold text-2xl justify-self-center">Home</p>
          <p className="text-lg justify-self-center">Away</p>
          <p className="font-bold text-2xl justify-self-center">From Home</p>
        </div>
      </Link>

      {/* Map */}
      <div className="">
        <img
          src={Map}
          alt="Map"
          className="absolute top-60 left-55 w-auto h-auto ml-60"
        />
      </div>

      {/* Text */}
      <div className="absolute top-70 left-40">
        <p className="text-black">
          To be apart from your hometown, <br />
          and how the new city has shaped you. <br />
          The joys and the bitterness of life abroad. <br /> Behind the scenes,{" "}
          <br /> where the wear, tear, and sweat are visible, <br /> yet seldom
          seen by others.
        </p>
      </div>
      <div className="absolute top-70 right-30">
        <p className="text-black">
          To be apart from your hometown, <br />
          and how the new city has shaped you. <br />
          The joys and the bitterness of life abroad. <br /> Behind the scenes,{" "}
          <br /> where the wear, tear, and sweat are visible, <br /> yet seldom
          seen by others.
        </p>
      </div>

      {/* flag */}
      <div className="absolute top-160">
        <Flag />
      </div>
    </div>
  );
};

export default Abroad;
