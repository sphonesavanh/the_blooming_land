import { Link } from "react-router-dom";
import Logo from "/images/blm_logo.png";
import Data from "../data/json/abroad.json";

const Abroad2: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center flex flex-row pt-20">
        <header>
          <img
            src={Logo} // Replace with your logo or use text
            alt="Bloomin' Land Logo"
            className="h-40 w-40"
          />
        </header>
        <Link to="/content/life-abroad">
          <div className="font-serif absolute top-30 left-180 align-center hover:underline">
            <p className="font-bold text-2xl justify-self-center">Home</p>
            <p className="text-lg justify-self-center">Away</p>
            <p className="font-bold text-2xl justify-self-center">From Home</p>
          </div>
        </Link>

        {/* Card */}
        {Data.map((data) => {
          return (
            <div className="flex absolute top-60 left-30 w-auto h-auto ml-60 gap-5">
              <div className="bg-white w-50 h-full flex flex-col items-center rounded-3xl">
                <p>{data.title}</p>
                <p>{data.name}</p>
                <img src={data.img} alt="" />
                <p>{data.country}</p>
                <p>{data.scholar}</p>
                <p>{data.note}</p>
              </div>
              <div className="bg-white w-50 h-full flex flex-col items-center rounded-3xl">
                <p>{data.title}</p>
                <p>{data.name}</p>
                <img src={data.img} alt="" />
                <p>{data.country}</p>
                <p>{data.scholar}</p>
                <p>{data.note}</p>
              </div>
              <div className="bg-white w-50 h-full flex flex-col items-center rounded-3xl">
                <p>{data.title}</p>
                <p>{data.name}</p>
                <img src={data.img} alt="" />
                <p>{data.country}</p>
                <p>{data.scholar}</p>
                <p>{data.note}</p>
              </div>
              <div className="bg-white w-50 h-full flex flex-col items-center rounded-3xl">
                <p>{data.title}</p>
                <p>{data.name}</p>
                <img src={data.img} alt="" />
                <p>{data.country}</p>
                <p>{data.scholar}</p>
                <p>{data.note}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Abroad2;
