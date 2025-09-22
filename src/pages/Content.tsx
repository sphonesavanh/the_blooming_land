import { ContentCard, DecorativeElement } from "../components/ContentCard";
import { Link } from "react-router-dom";
import Logo from "/images/blm_logo.png";

export default function Content() {
  const handleCardClick = (cardTitle: string) => {
    console.log(`Card clicked: ${cardTitle}`);
  }

  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center flex flex-row pt-20 gap-16">
      {/* Left Section */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Bloomin' Land Logo"
          className="absolute top-20 left-0 w-30 h-30"
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
            Blooming <br /> land
          </h1>
          <p className="italic text-gray-700 mt-2">is where</p>
          <p className="mt-4 text-gray-700 font-serif leading-relaxed">
            all are welcome,
            <br />
            we celebrate differences and embrace mistakes,
            <br />
            because humans learn through lessons,
            <br />
            and the best ones come from mistakes.
          </p>
        </div>
        {/* Heading */}
        <h1 className="absolute right-95 top-40 text-3xl italic font-serif mb-8">
          a youth's hub
        </h1>

        {/* Stamp Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl justify-items-center font-serif pl-40">
          {" "}
          <Link to="/content/daily-thoughts">
            {" "}
            <ContentCard
              title="Daily thoughts"
              backgroundColor="bg-yellow-100"
              textColor="text-yellow-800"
              decorativeElement={<DecorativeElement.PaintStrokes />}
              onClick={() => handleCardClick("Daily thoughts")}
              className="row-span-2"
            />{" "}
          </Link>{" "}
          <Link to="/content/piece-of-mind">
            {" "}
            <ContentCard
              title="Piece of Mind"
              backgroundColor="bg-blue-100"
              textColor="text-blue-800"
              decorativeElement={<DecorativeElement.Circle />}
              onClick={() => handleCardClick("Piece of Mind")}
            />{" "}
          </Link>{" "}
          <Link to="/content/life-abroad">
            {" "}
            <ContentCard
              title="Life Abroad - home away from home"
              backgroundColor="bg-orange-500"
              textColor="text-white"
              decorativeElement={<DecorativeElement.Leaves />}
              onClick={() => handleCardClick("Life Abroad")}
            />{" "}
          </Link>{" "}
          <Link to="/content/passions">
            {" "}
            <ContentCard
              title="Multi(passions)"
              backgroundColor="bg-purple-400"
              textColor="text-white"
              decorativeElement={<DecorativeElement.Fern />}
              onClick={() => handleCardClick("Passions")}
            />{" "}
          </Link>{" "}
          <Link to="/content/bye-linguals">
            {" "}
            <ContentCard
              title="Bye(linguals)"
              backgroundColor="bg-purple-300"
              textColor="text-white"
              decorativeElement={<DecorativeElement.Fern />}
              onClick={() => handleCardClick("Bye(Linguals)")}
            />{" "}
          </Link>{" "}
          <Link to="/content/are-you-ok">
            {" "}
            <ContentCard
              title="Are U Actually OK?"
              backgroundColor="bg-blue-200"
              textColor="text-blue-800"
              decorativeElement={<DecorativeElement.Starburst />}
              onClick={() => handleCardClick("Are U Actually OK?")}
            />{" "}
          </Link>{" "}
          <Link to="/content/books">
            {" "}
            <ContentCard
              title="Book's club"
              backgroundColor="bg-yellow-200"
              textColor="text-orange-600"
              decorativeElement={<DecorativeElement.Rainbow />}
              onClick={() => handleCardClick("Book's club")}
            />{" "}
          </Link>{" "}
          <Link to="/content/material">
            {" "}
            <ContentCard
              title="Material"
              backgroundColor="bg-green-200"
              textColor="text-green-800"
              decorativeElement={<DecorativeElement.Rainbow />}
              onClick={() => handleCardClick("Material")}
            />{" "}
          </Link>{" "}
        </div>
        <Link to="/content/content-expanded">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 mt-4 col-span-full">
            wanna explore more?
          </button>
        </Link>
      </div>
    </div>
  );
}
