import React from "react";
import { Link } from "react-router-dom";
import Logo from "/images/blm_logo.png";
import HomePic from "/images/home.jpg";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center">
      {/* Navbar */}
      <header className="bg-[#493a2f]">
        <img
          src={Logo} // Replace with your logo or use text
          alt="Bloomin' Land Logo"
          className="h-30 w-30"
        />
      </header>

      <div className="bg-[#f5f1e8] h-40"></div>

      <div className="bg-[#f5f1e8]">
        <div className="relative w-full">
          <div className="relative rounded-t-3xl overflow-hidden h-[calc(100vh-17.5rem)] w-full bg-cover bg-center">
            <img
              src={HomePic}
              alt="Blooming Land Logo"
              className="w-full h-full object-cover object-center"
            />

            {/*Text Overlay*/}
            <div className="absolute inset-0 flex pt-20 md:pt-30">
              <div className="pl-12 md:pl-16">
                <h1 className="text-[#E8B4CB] font-serif text-6xl md:text-8xl lg:text-9xl leading-none tracking-wide">
                  bloomin'
                  <br />
                  <p className="justify-self-center">land</p>
                </h1>
              </div>
            </div>

            {/* More button */}
            <div className="absolute bottom-8 right-8">
              <Link
                to="/about"
                className="bg-[#E8B4CB] font-serif text-xl text-black px-8 py-3 rounded-full font-medium hover:bg-[#E8B4CB]/90 transition-colors"
              >
                more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
