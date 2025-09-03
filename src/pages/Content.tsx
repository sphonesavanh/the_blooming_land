import { ContentCard, DecorativeElement } from "../components/ContentCard";
import { Link } from "react-router-dom";

export default function Content() {
  const handleCardClick = (cardTitle: string) => {
    console.log(`Clicked on: ${cardTitle}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 p-8 flex flex-col items-center">
      {/* Centered Title */}
      <div className="text-center mb-12">
        <h1 className="text-lg font-serif text-gray-800">The</h1>
        <h1 className="text-6xl font-serif font-bold text-gray-800">
          BLOOMIN'
        </h1>
        <h1 className="text-6xl font-serif font-bold text-gray-800">LAND</h1>
      </div>

      {/* Centered Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl justify-items-center font-serif">
        <Link to="/content/daily-thoughts">
          <ContentCard
            title="Daily thoughts"
            backgroundColor="bg-yellow-100"
            textColor="text-yellow-800"
            decorativeElement={<DecorativeElement.PaintStrokes />}
            onClick={() => handleCardClick("Daily thoughts")}
            className="row-span-2"
          />
        </Link>

        <Link to="/content/piece-of-mind">
          <ContentCard
            title="Piece of Mind"
            backgroundColor="bg-blue-100"
            textColor="text-blue-800"
            decorativeElement={<DecorativeElement.Circle />}
            onClick={() => handleCardClick("Piece of Mind")}
          />
        </Link>

        <Link to="/content/life-abroad">
          <ContentCard
            title="Life Abroad - home away from home"
            backgroundColor="bg-orange-500"
            textColor="text-white"
            decorativeElement={<DecorativeElement.Leaves />}
            onClick={() => handleCardClick("Life Abroad")}
          />
        </Link>

        <Link to="/content/passions">
          <ContentCard
            title="Multi(passions)"
            backgroundColor="bg-purple-400"
            textColor="text-white"
            decorativeElement={<DecorativeElement.Fern />}
            onClick={() => handleCardClick("Passions")}
          />
        </Link>

        <Link to="/content/bye-linguals">
          <ContentCard
            title="Bye(linguals)"
            backgroundColor="bg-purple-300"
            textColor="text-white"
            decorativeElement={<DecorativeElement.Fern />}
            onClick={() => handleCardClick("Bye(Linguals)")}
          />
        </Link>

        <Link to="/content/are-you-ok">
          <ContentCard
            title="Are U Actually OK?"
            backgroundColor="bg-blue-200"
            textColor="text-blue-800"
            decorativeElement={<DecorativeElement.Starburst />}
            onClick={() => handleCardClick("Are U Actually OK?")}
          />
        </Link>

        <Link to="/content/books">
          <ContentCard
            title="Book's club"
            backgroundColor="bg-yellow-200"
            textColor="text-orange-600"
            decorativeElement={<DecorativeElement.Rainbow />}
            onClick={() => handleCardClick("Book's club")}
          />
        </Link>

        <Link to="/content/material">
          <ContentCard
            title="Material"
            backgroundColor="bg-green-200"
            textColor="text-green-800"
            decorativeElement={<DecorativeElement.Rainbow />}
            onClick={() => handleCardClick("Material")}
          />
        </Link>
      </div>
    </div>
  );
}
