import data from "../../data/json/dailythoughts.json";
import Logo from "/images/blm_logo.png";
import { useParams, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DailyContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const content = data.find((item) => item.id.toString() === id);

  if (!content) {
    return <div>Content not found</div>;
  }
  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center">
      <div className="flex flex-row justify-between items-center">
        <Link
          to="/content/daily-thoughts"
          className="flex items-center hover:translate-y-4/120 hover:underline transition-transform"
        >
          <ArrowBackIcon />
          <span className="font-serif text-2xl text-[#493a2f] pl-3">Back</span>
        </Link>

        <h1 className="justify-self-center font-serif text-4xl text-[#493a2f]">
          Daily Thought {content.id}
        </h1>
        <img src={Logo} alt="Blooming Land Logo" className="w-28 h-auto" />
      </div>

      <div className="border-4 border-[#493a2f]"></div>

      <div className="p-4 m-4 font-serif">
        <img
          src={content.img}
          alt={content.title}
          className="w-400 h-90 mb-4"
        />
        <p className="text-2xl font-bold text-[#493a2f]">{content.title}</p>
        <p className="mt-4 text-lg text-[#493a2f]">{content.content}</p>
      </div>
    </div>
  );
};

export default DailyContent;
