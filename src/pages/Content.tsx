import { ContentCard, DecorativeElement } from "../components/ContentCard";
import { Link } from "react-router-dom";
import Logo from "/images/blm_logo.png";

export default function Content() {
  const handleCardClick = (cardTitle: string) => {
    console.log(`Card clicked: ${cardTitle}`);
  }

  const cardData = [
    {
      title: "Daily thoughts",
      path: "/content/daily-thoughts",
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      deco: <DecorativeElement.PaintStrokes />,
      desc: "Opinion based article",
    },
    {
      title: "Piece of Mind",
      path: "/content/piece-of-mind",
      bg: "bg-blue-100",
      text: "text-blue-800",
      deco: <DecorativeElement.Circle />,
      desc: "Fact",
    },
    {
      title: "Life Abroad - home away from home",
      path: "/content/life-abroad",
      bg: "bg-orange-500",
      text: "text-white",
      deco: <DecorativeElement.Leaves />,
      desc: "Life Abroad",
    },
    {
      title: "Book's club",
      path: "/content/books",
      bg: "bg-yellow-200",
      text: "text-orange-600",
      deco: <DecorativeElement.Rainbow />,
      desc: "Books",
    },
    {
      title: "Multi(passions)",
      path: "/content/passions",
      bg: "bg-purple-400",
      text: "text-white",
      deco: <DecorativeElement.Fern />,
      desc: "Job & Hobby (Coming soon)",
      disabled: true,
    },
    {
      title: "Bye(linguals)",
      path: "/content/bye-linguals",
      bg: "bg-purple-300",
      text: "text-white",
      deco: <DecorativeElement.Fern />,
      desc: "Languages (Coming soon)",
      disabled: true,
    },
    {
      title: "Are U Actually OK?",
      path: "/content/are-you-ok",
      bg: "bg-blue-200",
      text: "text-blue-800",
      deco: <DecorativeElement.Starburst />,
      desc: "Mental health & Well being (Coming soon)",
      disabled: true,
    },

    {
      title: "Material",
      path: "/content/material",
      bg: "bg-green-200",
      text: "text-green-800",
      deco: <DecorativeElement.Rainbow />,
      desc: "Resources for learning (Coming soon)",
      disabled: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center flex flex-row pt-20 gap-16">
      {/* Left Section */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Bloomin' Land Logo"
          className="absolute top-20 left-0 w-40 h-40"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-row items-center gap-20">
        {/* White Paper Card */}
        <div className="bg-white shadow-md p-5 w-[420px] h-[400px] relative justify-center items-center flex flex-col">
          {/* Paper Clip */}
          <div className="absolute -top-4 left-8 w-8 h-12 border-2 border-gray-400 rounded-full rotate-12"></div>

          {/* Text */}
          <h2 className="text-xl italic font-serif text-gray-800 justify-self-center">
            The
          </h2>
          <h1 className="text-4xl font-serif font-bold text-gray-900">
            Blooming <br /> <p className="justify-self-center">land</p>
          </h1>
          <p className="italic text-gray-700 mt-2 justify-self-center">
            is where
          </p>
          <p className="mt-4 text-gray-700 font-serif">
            <p className="justify-self-center">all are welcome,</p>
            <br />
            <p className="justify-self-center">
              we celebrate differences and embrace mistakes,
            </p>
            <br />
            <p className="justify-self-center">
              because humans learn through lessons,
            </p>
            <br />
            <p className="justify-self-center">
              and the best lessons come from mistakes.
            </p>
          </p>
        </div>
        {/* Heading */}
        <h1 className="absolute right-95 top-40 text-3xl italic font-serif mb-8">
          a youth's hub
        </h1>

        {/* Stamp Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl justify-items-center font-serif pl-40">
          {cardData.map((card, index) => (
            <div key={index} className="relative group">
              {card.disabled ? (
                <div
                  className={`opacity-50 cursor-not-allowed transition-transform duration-300`}
                >
                  <ContentCard
                    title={card.title}
                    backgroundColor={card.bg}
                    textColor={card.text}
                    decorativeElement={card.deco}
                    onClick={() => {}}
                  />
                </div>
              ) : (
                <Link to={card.path}>
                  <ContentCard
                    title={card.title}
                    backgroundColor={card.bg}
                    textColor={card.text}
                    decorativeElement={card.deco}
                    onClick={() => handleCardClick(card.title)}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              )}

              {/* hover overlay */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
