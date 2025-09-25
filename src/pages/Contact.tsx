import { Link } from "react-router-dom";
import ContactPic from "/images/contact.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/images/background.png')] bg-cover bg-center px-8 py-6">
      {/* Back Button */}
      <Link
        to="/content"
        className="flex flex-row items-center w-fit hover:-translate-x-1 hover:underline transition-transform duration-300 mb-8"
      >
        <ArrowBackIcon />
        <h1 className="font-serif text-xl text-[#493a2f] pl-2">Back</h1>
      </Link>

      {/* Content Section */}
      <div className="font-serif flex flex-col items-center text-center gap-6 flex-grow">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#493a2f]">Get in Touch</h1>
        <p className="text-lg text-gray-700">We’d love to hear from you!</p>

        {/* Email */}
        <div className="bg-white/80 shadow-md rounded-lg px-6 py-3">
          <h2 className="text-xl text-gray-800">
            Email:{" "}
            <span className="font-semibold text-[#493a2f]">
              thebloomingland@contact.com
            </span>
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-6 mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=100075991876444"
            className="bg-white shadow-md rounded-full p-4 hover:bg-[#4267B2] hover:text-white transition-colors duration-300"
          >
            <FacebookIcon sx={{ fontSize: "40px" }} />
          </a>
          <a
            href="https://www.instagram.com/theblooming.land?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="bg-white shadow-md rounded-full p-4 hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:text-white transition-colors duration-300"
          >
            <InstagramIcon sx={{ fontSize: "40px" }} />
          </a>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="flex justify-center mt-10">
        <img
          src={ContactPic}
          alt="Contact Picture"
          className="w-full max-w-4xl h-60 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Contact;
